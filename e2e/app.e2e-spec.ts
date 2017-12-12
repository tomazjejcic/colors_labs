import { DlabspokerPage } from './app.po';

describe('dlabspoker App', () => {
  let page: DlabspokerPage;

  beforeEach(() => {
    page = new DlabspokerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
