const request = require('supertest');
const expect= require('expect');

const { app } = require('../server/server');
const { activitymodel } = require('../server/model/activitymodel');

beforeEach((done) => {
    activitymodel.remove({}).then(() => done()).catch((err) => done(err));
});

describe('POST /api/activity', () => {

    it('should create a new activity', (done) => {
        var text = 'Testing text 1';
        request(app)
            .post('/api/activity')
            .send({text})
            .expect(201)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                activitymodel.find().then((results) => {
                    expect(results.length).toBe(1);
                    expect(results[0].text).toBe(text);
                    done();
                }).catch((err) => done(err));
            });
    });

    it('should not create a new activity if the text is blank', (done) => {
        var text = ' ';

        request(app)
            .post('/api/activity')
            .send({text})
            .expect(400)
            .end((err, res) => {
                if(err){
                    return done(err);
                }
                done();
            });
    });

});