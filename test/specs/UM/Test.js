describe('UE testing', () => {
    it('should show the streaming', async () => {

        await browser.url(`https://test-um.streaming.studio4d.com`);
        await $('a[href="/xp-experience"]').click();

    })


    it('should change timeout duration for session with long code duration', async () => {
        // Execute code which takes a long time
        await browser.executeAsync((done) => {
            setTimeout(done, 5900);
        });
    });

    // it('should move the camara', async () => {
    //     // Execute code which takes a long time
    //     await $('#streamingVideo').click();

    // });

});
