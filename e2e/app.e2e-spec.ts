import { ProviderDemoPage } from './app.po';

describe('provider-demo App', () => {
  let page: ProviderDemoPage;

  beforeEach(() => {
    page = new ProviderDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
