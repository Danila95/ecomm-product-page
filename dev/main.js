import * as $ from 'jquery';
import Post from '@models/Post';
import '@common/babel';
import './style.scss';
import WebpackLogo from './img/webpack-logo';


const post = new Post('Webpack Post Title', WebpackLogo);

$('pre').addClass('code').html(post.toString());

console.log('Post to String:', post.toString());