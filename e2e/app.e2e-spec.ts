import { AngularKursPage } from './app.po';

describe('angular-kurs App', () => {
  let page: AngularKursPage;

  beforeEach(() => {
    page = new AngularKursPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
