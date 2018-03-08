import { AppPage } from './app.po';

describe('test-ng4 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular5 and Bootstrap4 Admin Panel');
  });
});
