describe('The User Search Page', function() {
  it('文字数制限のエラーが発生する', function() {
    cy.visit('/')
    cy.get('a[href="/users/search"]').click()
    cy.get('#login').type('01234567891234567')
    cy.get('button[type=submit]').click()
    cy.contains('16文字以内で入力してください')
  })

  it('入力必須エラーが発生する', function() {
    cy.visit('/')
    cy.get('a[href="/users/search"]').click()
    cy.get('button[type=submit]').click()
    cy.contains('入力必須項目です')
  })

  it('検索結果が表示される', function() {
    cy.visit('/')
    cy.get('a[href="/users/search"]').click()
    cy.get('#login').type('taro')
    cy.get('button[type=submit]').click()
    cy.contains('taro')
  })
})