# Operador ?.

A interrogação `?` é chamada de "operador de acesso condicional" (optional chaining operator) em JavaScript. Ela é usada para evitar erros de referência nula (null reference errors) quando se tenta acessar propriedades de objetos que podem ser nulos ou indefinidos.

No meu exemplo:

```typescript
field?.hasError('phone')
```

O operador `?.` verifica se `field` é `null` ou `undefined` antes de tentar acessar o método `hasError()`. Isso significa que, se `field` for `null` ou `undefined`, a expressão simplesmente retornará `undefined` em vez de gerar um erro.

Sem o uso do operador `?.`, se `field` fosse `null` ou `undefined`, a expressão `field.hasError('phone')` geraria um erro de referência nula (Uncaught TypeError: Cannot read property 'hasError' of null/undefined).

Então, o uso do `?.` é uma forma segura de acessar propriedades e métodos de objetos que podem ser nulos ou indefinidos, evitando que o seu código quebre inesperadamente.

---

# pathMatch: 'full'

O parâmetro `pathMatch: 'full'` é usado no roteamento de aplicações Angular e tem a função de definir como o Angular deve comparar a URL atual com a rota definida.

Quando define uma rota com o parâmetro `pathMatch: 'full'` está dizendo ao Angular que a URL atual deve corresponder exatamente à rota definida, sem nenhum segmento adicional.

Por exemplo:

Suponha que tenha a seguinte rota definida:

```typescript
{
  path: 'home',
  component: HomeComponent,
  pathMatch: 'full'
}
```

Nesse caso, as seguintes URLs seriam consideradas correspondentes à rota:

- `/home`
- `http://example.com/home`

Mas as seguintes URLs **não** seriam consideradas correspondentes:

- `/home/about`
- `/home?query=value`
- `/home/123`

Isso acontece porque o `pathMatch: 'full'` exige que a URL corresponda exatamente ao caminho definido, sem nenhum segmento adicional.

Agora, se tiver a seguinte rota definida:

```typescript
{
  path: 'home',
  component: HomeComponent
}
```

Nesse caso, as seguintes URLs seriam consideradas correspondentes à rota:

- `/home`
- `/home/about`
- `/home?query=value`
- `/home/123`

Isso acontece porque, sem o `pathMatch: 'full'`, o Angular considera que a rota corresponde a qualquer URL que comece com o caminho definido.

Então, em resumo, `pathMatch: 'full'` é usado para garantir que a URL corresponda exatamente ao caminho definido, sem nenhum segmento adicional.