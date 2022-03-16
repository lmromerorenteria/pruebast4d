describe('UE testing', () => {
    it('should show the streaming', async () => {
        await browser.url(`https://dev-um.streaming.studio4d.com`);
        await $('a[href="/xp-experience"]').click();


        

        // await $('#username').setValue('tomsmith');
        // await $('#password').setValue('SuperSecretPassword!');

        // await expect($('#flash')).toBeExisting();
        // await expect($('#flash')).toHaveTextContaining(
        //     'You logged into a secure area!');
    })
    

    it('should change timeout duration for session with long code duration', async () => {
        // Execute code which takes a long time
        await browser.executeAsync((done) => {
            console.log('Wake me up before you go!');
            setTimeout(done, 5900);
        });
    });

    it('should move the camara', async () => {
        // Execute code which takes a long time
        await $('#streamingVideo').click();
        
    });

});
