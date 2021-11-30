import puppeteer from 'puppeteer';

describe('Show/hide an event details', () => {
  let browser, page;
  jest.setTimeout(30000);
  beforeAll(async () => {
    browser = await puppeteer.launch();
    // browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 250,
    //   ignoreDefaultArgs: ['--disable-extensions'],
    // });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default.', async () => {
    const eventDetails = await page.$('.event .event-detail--show');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .toggle-btn');
    const eventDetails = await page.$('.event .event-detail--show');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .toggle-btn');
    const eventDetails = await page.$('.event .event-detail--show');
    expect(eventDetails).toBeNull();
  });
});

// Bonus Task test 
describe('Filter events by city', () => {
  let browser, page;
  jest.setTimeout(30000);
  beforeAll(async () => {
    browser = await puppeteer.launch();
    // browser = await puppeteer.launch({
    //   headless: false,
    //   slowMo: 250,
    //   ignoreDefaultArgs: ['--disable-extensions'],
    // });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    
  });

  afterAll(() => {
    browser.close();
  });

  test('When user hasn’t searched for a city, show upcoming events from all cities.', async () => {
    await page.waitForSelector('.EventList');
    const EventList = await page.$('.event li');
    expect(EventList).toBeDefined();
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.click('.city');
    await page.type('.city-search', 'Berlin');
    const citySearchSuggestions = await page.$('.suggestions li');
    expect(citySearchSuggestions).toBeDefined();
  });

  test('User can select a city from the suggested list', async () => {
    await page.click('.suggestions li');
    const EventList = await page.$('.event li');
    expect(EventList).toBeDefined();
  });
});