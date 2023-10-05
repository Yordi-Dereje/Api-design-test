import * as user from '../users'

//describe is an organizational function to describe the module you're testing
describe('user handler', () => {
    it('should create a new user', async () => {
        const req = {body: {username: 'hello', password: 'hi'}}
        const res = {json({token}){
                    expect(token).toBeTruthy()
                    //this is saying we are expecting to see at least one call
                }}

        await user.createNewUser(req, res, () => {} )
    })
})