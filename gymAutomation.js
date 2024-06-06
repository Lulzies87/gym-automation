import "dotenv/config";
import puppeteer from 'puppeteer';
import { setTimeout } from "timers/promises";

console.log("Running...");

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://site.arboxapp.com/schedule?identifier=Lwvxzg0n1588778971&whitelabel=hypr-training&referer=site&lang=en');

    await page.setViewport({ width: 1080, height: 1024 });

    const loginBtn = await page.waitForSelector('xpath/html/body/div[1]/div/div/div/div/div/div/div[1]/div[2]/div/div/div');
    await loginBtn.click();

    const emailField = await page.$("input[type='email']");
    await emailField.type(process.env.USER);

    const passwordField = await page.$("input[type='password']");
    await passwordField.type(process.env.PASSWORD);

    // console.log("Grabbing login button");
    const commitLogin = await page.waitForSelector('xpath/html/body/div[2]/div/div[2]/div/div/div/div/div[2]/div[2]/div[1]/div/div/div[4]/div');

    // const grabbedElement = await page.evaluate(body => body.outerHTML, commitLogin);
    // console.log("Clicking element:", grabbedElement);
    await setTimeout(5000);
    await commitLogin.click();


    // const matchingDivs = await page.evaluate(() => {
    //     console.log("Selecting all workouts...");
    //     const selections = document.querySelectorAll(`div.r-1xfd6ze`);
    //     const allWorkouts = Array.from(selections); // is this needed?

        // allWorkouts.map(div => div.outerHTML);
        // return allWorkouts.map(div => div.outerHTML);

        // const filteredWorkouts = [];

        // allWorkouts.forEach(div => {

        //     const xpath = "//div[text()='18:00-19:00']";
        //     const matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            // if (div.innerHTML.trim() === '18:00-19:00') {
            //     filteredWorkouts.push(div);

                // let sibling = div.nextElement;
                // while (sibling) {
                //     if (sibling.tagName === 'div' && sibling.innerHTML.trim() === 'WOD') {
                //         filteredWorkouts.push(div);
                //         break;
                //     }
                //     sibling = sibling.nextElementSibling;
                // }
            // }
        // });

        // return filteredWorkouts.map(div => div.outerHTML);
        // return filteredWorkouts.map(div => div.outerHTML);
    // });

    // console.log(matchingDivs);

    // await browser.close();
})();