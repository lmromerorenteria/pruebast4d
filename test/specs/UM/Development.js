describe('UE testing', () => {
    it('should show the streaming', async () => {

        await browser.url(`https://dev-um.streaming.studio4d.com`);
        await $('a[href="/xp-experience"]').click();

    })




    it('should move the camara', async () => {
        // Execute code which takes a long time
        await $('#streamingVideo').click();

    });

});
