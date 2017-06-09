import { VideoStorePage } from './app.po';

describe('video-store App', () => {
  let page: VideoStorePage;

  beforeEach(() => {
    page = new VideoStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
