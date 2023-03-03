describe('Тестируем форму логина и пароля', () => {
  it('правильный логин и пароль', () => {
    const correctEmail = 'german@dolnikov.ru';
    const correctPassword = 'iLoveqastudio1';

    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type(correctEmail);
    cy.get('#pass').type(correctPassword);
    cy.contains('Войти').click();
    cy.contains('Авторизация прошла успешно').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })

it('проверка логики восстановления пароля', () => {
    const email = 'example@example.com';

    cy.visit('https://login.qa.studio/');
    cy.contains('Забыли пароль?').click();
    cy.get('#mailForgot').type(email);
    cy.contains('Отправить').click();
    cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })

it('Негативный кейс авторизации', () => {
    const email = 'german@dolnikov.ru';
    const incorrectPassword = 'incorrectpassword';

    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type(email);
    cy.get('#pass').type(incorrectPassword);
    cy.contains('Войти').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });

it('Неправильный Логин', () => {
    const incorrectEmail = 'incorrect@example.com';
    const password = 'iLoveqastudio1';

    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type(incorrectEmail);
    cy.get('#pass').type(password);
    cy.contains('Войти').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });


 it('Логин без собаки', () => {
    cy.visit('https://login.qa.studio/')
    cy.get('#mail').type('germandolnikov.ru')
    cy.get('#pass')
      .type('iLoveqastudio1')
    cy.contains('Войти').click();
    cy.contains('Нужно исправить проблему валидации').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })


it('Значения приводятся к строчным', () => {
    cy.visit('https://login.qa.studio/')
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.contains('Войти').click();
    cy.contains('Авторизация прошла успешно').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })
})