import { Selector } from 'testcafe';

fixture `Hola mundo`
    .page('www.google.com')
    .beforeEach(async t => {
        t.ctx.valor = 4242;
        t.fixtureCtx.valor = 4343;
    });


test('Test 1', async t => {
    console.log('Test ' + t.ctx.valor);
    console.log('Test fixture '  + t.fixtureCtx.valor);
});
