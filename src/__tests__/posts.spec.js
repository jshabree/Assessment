import waitUntil from 'async-wait-until';
import { shallow } from 'enzyme'
import { nock } from 'nock';
import { React } from "react";
import Posts from '../components/posts';

describe('<Posts />', () => {
    beforeAll(() => {

    // prepare nock to respond to a request to posts API
        nock("https://jsonplaceholder.typicode.com/posts")
            .get('?_limit=5')
    });
});