import waitUntil from 'async-wait-until';
import { shallow } from 'enzyme'
import { nock } from 'nock';
import { React } from "react";
import Posts from '../components/posts';

describe('<Posts />', () => {
    beforeAll(() => {

    // prepare nock to respond to a request to posts API
    nock("https://posts.example.com/api")
        .get('/data')
        .reply(200, {
            data: [],
            summary : 'cat API'
        });
        
    });

    it('component fetching posts from API', async(done) => {
        const root = shallow(<Posts data= "data"/>);

        let componentsPost = {};
        await waitUntil(() => root.state('info').data !== null);

        expect(componentsPost.data).toEqual('cat API');

        done();
    })
});
  