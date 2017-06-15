import { MTPCloundAppNewPage } from './app.po';

describe('mtpclound-app-new App', () => {
  let page: MTPCloundAppNewPage;

  beforeEach(() => {
    page = new MTPCloundAppNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
