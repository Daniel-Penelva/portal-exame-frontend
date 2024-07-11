import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Form, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  /*
  public user = {
    username:'',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  };*/

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, this.phoneValidator])
  });

  constructor(private userService: UserService, private snack: MatSnackBar){

  }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.form.valid) {
      this.userService.cadastrarUsuario(this.form.value).subscribe(
        (data) => {
          console.log(data);
          Swal.fire('Usuário cadastrado', 'Usuário cadastrado com sucesso', 'success');
        },
        (error) => {
          console.log(error);
          this.snack.open('Ocorreu um erro do sistema', 'Fechar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
        }
      );
    }
  }

  // Método para validação do telefone
  phoneValidator(control: FormControl): ValidationErrors | null {
    const phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
    if(!phoneRegex.test(control.value)){
      return { phone: true };
    }
    return null;
  }

  // Método de mensagens de error
  getErrorMessage(fieldname: string){
    
    const field = this.form.get(fieldname);

    if(field ?.hasError('required')){          // O operador ?. verifica se field é null ou undefined antes de tentar acessar o método hasError().
      return 'Campo obrigatório';
    }

    if(field ?.hasError('minlength')){
      let requiredLength: number;

      switch(fieldname){
        case 'username':
          requiredLength = 3;
          break;
        case 'password':
          requiredLength = 6;
          break;
        case 'firstname':
        case 'lastname':
          requiredLength = 3;
          break;
        default:
          requiredLength = 3;
          break;
      }
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres`;
    }

    if(field ?.hasError('maxlength')){
      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 20;  // verifica se há algum erro para a regra de validação 'maxlength' do field. Se houver erros, ele recupera a propriedade requiredLength desses erros. Se não houver erros, ele define requiredLength como 20.
      return `Tamanho máximo excedido de ${requiredLength} caracteres`;
    }

    if(field ?.hasError('email')){
      return 'E-mail inválido';
    }

    if(field ?.hasError('phone')){
      return 'Telefone inválido';
    }

    return 'Campo inválido';
  }

}

/* O que eu fiz no regex no método phoneValidator:

^ - Início da string
$$ - Procura por um parêntese de abertura
\d{2} - Procura por 2 dígitos (código de área)
$$ - Procura por um parêntese de fechamento
\d{5} - Procura por 5 dígitos (número principal)
- - Procura por um hífen
\d{4} - Procura por 4 dígitos (dígitos finais)
$ - Final da string

*/

/* Operador ?. 
O operador ?. verifica se field é null ou undefined antes de tentar acessar o método hasError(). Isso significa que, se field for null ou 
undefined, a expressão simplesmente retornará undefined em vez de gerar um erro.

Sem o uso do operador ?., se field fosse null ou undefined, a expressão field.hasError('phone') geraria um erro de referência nula (Uncaught 
TypeError: Cannot read property 'hasError' of null/undefined).

Então, o uso do ?. é uma forma segura de acessar propriedades e métodos de objetos que podem ser nulos ou indefinidos, evitando que o código 
quebre inesperadamente.
*/