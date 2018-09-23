import test from 'ava'
import Nightmare from 'nightmare'
// import hat from 'hat'

const client = Nightmare({
    'show': !process.env.CI
});

test.before(async (t) => {
    await client
        .viewport(1366, 768)
        .goto('http://localhost:3000')
        .wait('#root')
});

test.after.always(async () => {
    await client.end()
});

test.serial('Dokumentumtár kereső teszt', async (t) => {
    const result = await client
        .wait(3000)
        // .click('a[href="/timeline"]')
        // .wait('.ant-input')
        // .type('.ant-input', 'eevee')
        // .wait(1000)
        // .click('div[comp-id="637"]')
        // // .wait(1000)
        .url();

    t.is(result, 'http://localhost:3000/')
});

// test.serial('Személy lista teszt', async (t) => {
//   const result = await client
//     .click('button[class="ant-btn ant-btn-primary ant-btn-circle ant-btn-icon-only"]')
//     .click('a[href="/persons"]')
//     .wait(1000)
//     .url();
//
//   t.is(result, 'http://localhost:3000/persons')
// });
