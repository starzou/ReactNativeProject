'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
    } = React;

var MOCKED_MOVIES_DATA = [
    {
        title: '速度与激情7',
        year : '2015',
        uri  : 'http://b.hiphotos.baidu.com/video/pic/item/902397dda144ad34112c92e6d5a20cf431ad853b.jpg'
    },
    {
        title: '战狼',
        year : '2015',
        uri  : 'http://c.hiphotos.baidu.com/video/pic/item/bf096b63f6246b6015a3aca8eff81a4c500fa2b8.jpg'
    }
];

// MovieItem Component
var MovieItem = React.createClass({
    render: function () {
        return (
            <View style={styles.movieItem}>
                <Image source={{uri: this.props.uri}} style={styles.image}/>
                <View style={styles.movieDetail}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.year}>{this.props.year}</Text>
                </View>
            </View>
        );
    }
});

// MovieList Component
var MovieList = React.createClass({
    render: function () {
        var movies = MOCKED_MOVIES_DATA.map(function (movie, index) {
            return (
                <MovieItem key={index} {...movie}></MovieItem>
            );
        });

        return (
            <View>
                {movies}
            </View>
        );
    }
});

// ReactNativeProject Component
var ReactNativeProject = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <MovieList></MovieList>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container  : {
        flex           : 1,
        marginTop      : 20,
        flexDirection  : 'column',
        backgroundColor: '#F5FCFF'
    },
    title      : {
        fontSize    : 20,
        textAlign   : 'center',
        marginBottom: 8
    },
    year       : {
        textAlign: 'center'
    },
    image      : {
        width : 64,
        height: 64
    },
    movieDetail: {
        flex: 1
    },
    movieItem  : {
        flex          : 1,
        marginTop     : 10,
        marginLeft    : 10,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems    : 'center'
    }

});

AppRegistry.registerComponent('ReactNativeProject', () => ReactNativeProject);
