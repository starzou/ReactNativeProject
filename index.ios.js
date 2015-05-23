'use strict';

var React = require('react-native');

var {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View
    } = React;

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

var ReactNativeProject = React.createClass({
    getInitialState: function () {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded    : false
        };
    },

    componentDidMount: function () {
        this.fetchData();
    },

    fetchData: function () {
        fetch(REQUEST_URL)
            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded    : true
                });
            })
            .done();
    },

    render: function () {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}/>
        );
    },

    renderLoadingView: function () {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    },

    renderMovie: function (movie) {
        return (
            <View style={styles.container}>
                <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container     : {
        flex           : 1,
        flexDirection  : 'row',
        justifyContent : 'center',
        alignItems     : 'center',
        backgroundColor: '#F5FCFF'
    },
    rightContainer: {
        flex: 1
    },
    title         : {
        fontSize    : 20,
        marginBottom: 8,
        textAlign   : 'center'
    },
    year          : {
        textAlign: 'center'
    },
    thumbnail     : {
        width : 53,
        height: 81
    },
    listView      : {
        paddingTop     : 20,
        backgroundColor: '#F5FCFF'
    }
});

/// My WorkSpace Start

/**
 * MyPage Component
 */
var MyPage = React.createClass({

    getInitialState: function () {
        return {
            date: new Date()
        };
    },

    render: function () {
        return (
            <View style={style.container}>

                <Text style={style.title}>React Native 研究</Text>

                <View style={style.row}>
                    <Text>ActivityIndicatorIOS : </Text>
                    <ActivityIndicatorIOS style={style.loading} animating={true} size="large" color="green"/>
                </View>

                <View style={style.column}>
                    <Text>DatePickerIOS : </Text>
                    <DatePickerIOS date={this.state.date} mode="datetime" onDateChange={this.onDateChange}/>
                </View>

                <View style={style.row}>
                    <Text>Image : </Text>
                    <Image style={style.image} resizeMode="contain" source={{uri:'http://b271.photo.store.qq.com/psb?/931a977e-ea20-42a2-9b12-b36820c5a300/8aeHF4qcjQ24SuInOSrNpQkLfgXDfKbiCeGort8O8gc!/b/dDEllaE4HQAA&bo=gAJpBAAAAAAKB8Q!&rf=viewer_4'}}/>
                </View>

            </View>
        );
    },

    componentDidMount: function () {
        console.log(this);
    },

    onDateChange: function (date) {
        console.log(date);
    }
});

var style = StyleSheet.create({
    container: {
        flex           : 1,
        backgroundColor: '#F5FCFF'
    },
    column   : {
        flexDirection: 'column'
    },
    row      : {
        flexDirection : 'row',
        justifyContent: 'space-around',
        alignItems    : 'center'
    },
    title    : {
        fontSize  : 30,
        textAlign : 'center',
        paddingTop: 20
    },
    image    : {
        width : 128,
        height: 128
    },
    loading  : {}
});

var {ActivityIndicatorIOS,DatePickerIOS} = React;

/// My WorkSpace End

AppRegistry.registerComponent('ReactNativeProject', () => MyPage);
