/*
BARRON.CZ
*/
import React, { Component } from 'react';

import {
	Platform,ScrollView,Keyboard,PickerIOS,KeyboardAvoidingView,
	StyleSheet,StatusBar,
	Text,Easing,
	View,TextInput,Dimensions,FlatList,Button,TouchableOpacity,Image,WebView,Animated,ActivityIndicator
} from 'react-native';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import { iOSUIKit,material } from 'react-native-typography'
import {StackActions,
	StackNavigator,
	createBottomTabNavigator,
	TabNavigator,
	
	NavigationActions,
	addNavigationHelpers,NavigationEvents,//createStackNavigator,createAppContainer,AppNavigator
} from 'react-navigation'; // 1.1.2
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import ImageSlider from 'react-native-image-slider';
import { BlurView } from 'react-native-blur';
import AppIntro from 'react-native-app-intro';
import DropdownAlert from 'react-native-dropdownalert';
import RNPickerSelect from 'react-native-picker-select';
import Realm from 'realm';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { TouchableRipple,FAB,Appbar ,Searchbar,RadioButton,Title,Divider,List,Paragraph,Surface} from 'react-native-paper';

const reducer = (state={},action)=>{

	return state
}
const store = createStore(reducer)
//import CodePush from 'react-native-code-push';

import { TranslateYAndOpacity } from 'react-native-motion';
//if(Platform.OS=='ios'){
import LottieView from 'lottie-react-native';
//}
var utf8 = require('utf8');
var binaryToBase64 = require('binaryToBase64');

import StatusBarAlert from 'react-native-statusbar-alert';
const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
	'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu',
});
console.disableYellowBox = true;
import EleRNLocation from 'ele-react-native-location';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'
import Lightbox from 'react-native-lightbox';
const uyeSchema = {
	name: 'Uyeler',
	properties: {
		username: 'string',
		mail: 'string',
		sifre: 'string',
		rank: { type: 'int', default: 0 },
		token: 'string',
		sepet: { type: 'int', default: 0 }
	},
};
const notificationSchema = {
	name: 'Notifications',
	properties: {
		id: 'string',
		notification: 'string',
		time: 'string',
	},



}
const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
		borderWidth: 1,
		borderColor: '#f0f0f0',
		borderRadius: 4,
		backgroundColor: '#fff',
		color: 'black',
	},
});


type Props = {};
export default class App extends React.Component {
	render() {
		return <Provider store={store}><RootStack /></Provider>;
	}
}

var opak=55;
var h=55;

var renk
renk = ['#eb5424','#ee6123','#00aee6']
renk=renk[Math.floor((Math.random() * 5) + 0)]
renk = '#09347a'

class HomeScreen extends React.Component {
	constructor(props) {

		super(props);
		this.handleScroll = this.handleScroll.bind(this);

		this.state = {
			isShowingText: false,
			UserName: '',
			Password: '',
			closelogin:true,dragpos:true,
			opacityValue: new Animated.Value(0.4),
			translateYValue: new Animated.Value(20),
			fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0


		};
	}

	static navigationOptions = {
		title: 'Ana Sayfa',
		header:null,
		tabBarIcon: ({ focused,tintColor }) => (
			focused ? 	<Icon2 name="home" size={21} color="purple" style={{marginBottom:1}} />
			:				<Icon2 name="home" size={21} color="#ccc" style={{marginBottom:1}} />


			 
		  ),		
	};


	bringcategories(){




		fetch('https://www.firsatlarkulubu.com/oauth/api/catalog/list/', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + this.state.token,
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: 'Id=',
		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				// alert(JSON.stringify(response))
				this.setState({catdata:response})
			})
	}
	bringcampaings(a){
		this.setState({loading:true})
		//	alert(a)
		fetch('https://www.firsatlarkulubu.com/oauth/api/product/list/', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + this.state.token,
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: 'CategoryId=' +
			a +
			'&Keywords=&OrderBy=0&BrandName=&PriceMin=&PriceMax=&P1=0&P2=100',
		})
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				// alert(JSON.stringify(response))
				this.setState({loading:false,productdata:response.Products})   })
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(error);
			});

	}

	showshopcase(){


		this.setState({loading:true})
		//	alert(a)
		fetch('https://www.firsatlarkulubu.com/oauth/api/shopcase/list/', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + this.state.token,
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: '',
		})
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				this.setState({loading:false,shopcase:response})  ;

				this.setState({selectedcase:response[0].Products,selected:response[0].Name})
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(error);
			});










	}

	handleScroll(event: Object) {

		//alert(event.nativeEvent.contentOffset.y);
		if (event.nativeEvent.contentOffset.y==55)
		{
			opak=0
			h=0
			this.setState({h:0,opak:0})

		}else if((event.nativeEvent.contentOffset.y>0)){
			opak=event.nativeEvent.contentOffset.y/55
			h=event.nativeEvent.contentOffset.y/55
			this.setState({h:event.nativeEvent.contentOffset.y,opak:.4})

		};
	}

	showslider(){


		this.setState({loading:true})
		//	alert(a)
		fetch('https://www.firsatlarkulubu.com/oauth/api/banner/list/Slider', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + this.state.token,
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: '',
		})
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				//  alert(JSON.stringify(response))
				var sslider = []
				for(var i=0; i<response.length; i++){

					sslider.push('https:'+response[i].Image)
				}
				this.setState({loading:false,slider:sslider})  


			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(error);
			});










	}

	showcart(){

		this.setState({ loading: true });
		//    this.productcount();
		//	  this.categorylist()
		fetch(
			'https://www.firsatlarkulubu.com/oauth/api/shoppingcart/list/' ,
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + this.state.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},

				//	body: 'CategoryId='+this.state.ddd[0].Id+'&Keywords=&OrderBy=&BrandName=&PriceMin=0&PriceMax=1000&P1=0&P2=100',
			}
		)
			.then(response => {
				const statusCode = response.status;
				// alert(statusCode)
				return response.json();
			})
			.then(response => {
				//	alert(JSON.stringify(response))
				var fruits = [];
				this.setState({ loading: false,cart:response });
			})
			.catch(error => {
				//this.props.navigation.navigate('Home')
				// alert(error);
			});


	}


	getparameters(){


		fetch('https://www.firsatlarkulubu.com/oauth/api/parameters/list', {
			method: 'GET',
			headers: {

				Authorization: 'Bearer ' + this.state.token,

				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: '',
		})
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				//   alert(JSON.stringify(response))
				this.setState({loading:false,parameters:response})  
				renk=response.ColorCode
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(error);
			});



	}

	componentDidMount(){

		Realm.open({ schema: [uyeSchema,notificationSchema], schemaVersion: 5 })
			.then(realm => {
				realm.objects('Uyeler'); //Tüm objeleri geri dönderir.
				// alert(realm.objects('Uyeler').filtered('username="'+this.state.UserName+'"').length)

				if (realm.objects('Uyeler').length < 1) {
				} else {
					// alert(JSON.stringify(realm.objects('Uyeler')[0].username))

					this.setState(
						{
							UserName: realm.objects('Uyeler')[0].username,
							Password: realm.objects('Uyeler')[0].sifre,

						},
						function() {
							this.dologin();
						}
					);
				}

			})
			.catch(error => {
				console.log(error);
			});




		Animated.timing(                  // Animate over time
			this.state.fadeAnim,            // The animated value to drive
			{
				toValue: 1,                   // Animate to opacity: 1 (opaque)
				duration: 500,              // Make it take a while
			}
		).start();  
		Animated.parallel([
			Animated.timing(this.state.opacityValue, { /* ... */ }),
			Animated.timing(this.state.translateYValue, { /*  ... */ }),
		]).start();
	}
	dologin() {
		if(this.state.Password == '' || this.state.UserName == '' || typeof this.state.UserName == undefined ||  typeof this.state.Password == undefined  ){
			this.dropdown.alertWithType('error', 'Form eksik','Lütfen giriş bilgilerinizi eksiksiz giriniz');

			return}

		this.dropdown.alertWithType('info', 'Bilgi','Giriş yapılıyor...');

		var encodedString='' ;
		//	  var text = 'foo © bar 𝌆 baz';
		//var bytes = utf8.encode(text);
		//var encoded = binaryToBase64(bytes);
		// if(true){
		// this.setState({ loading: true });
		// alert(encodedString),
		//


		this.setState({loading:true})		  
		fetch('https://www.firsatlarkulubu.com/oauth/api/auth', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },

			body: 'UserName=' +
			encodeURIComponent(this.state.UserName) +
			'&Password=' +
			encodeURIComponent(this.state.Password) +
			'&grant_type=password',
		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				//alert(JSON.stringify(response))

				//this.props.navigation.navigate('Proje', {
				//  UserName: this.state.UserName,
				//  Password: this.state.Password,
				//});
				//
				// alert(JSON.stringify(response))
				//  alert(response.LoginControl)
				if (response.LoginControl == 'Success' ) {

					Realm.open({ schema: [uyeSchema,notificationSchema], schemaVersion: 5 })
						.then(realm => {
							realm.objects('Uyeler'); //Tüm objeleri geri dönderir.
							//  alert(realm.objects('Uyeler').filtered('username="'+this.state.UserName+'"').length)

							if (
								realm
								.objects('Uyeler')
								.filtered('username="' + this.state.UserName + '"').length < 1
							) {
								//	 alert(JSON.stringify(realm.objects('Uyeler').filtered('username="'+this.state.UserName+'"')))
								Realm.open({ schema: [uyeSchema,notificationSchema], schemaVersion: 5 })
									.then(realm => {
										realm.write(() => {
											realm.create('Uyeler', {
												username: this.state.UserName,
												mail: this.state.UserName,
												sifre: encodeURIComponent(this.state.Password),
												rank: 2,
												token: response.access_token,
												sepet: 0,
											});
										});
									})
									.catch(error => {
										console.log(error);
									});
							} else {

							}
							// alert(JSON.stringify(realm.objects('Uyeler').filtered('username="gokhanamal"')) )    //Username'i gokhanamal olan objeleri geri dönderir.
						})
						.catch(error => {
							console.log(error);
						});





					this.setState({token:response.access_token,
						UserName: this.state.UserName,
						Password: encodeURIComponent(this.state.Password),

					},function(){

						this.setState({closelogin:false})

						this.bringcategories()
						this.showshopcase()
						this.showslider()
						this.getparameters()
						setInterval(() => {

							this.showcart()

						}, 2000);



					})

					//	return
				} else {
					this.dropdown.alertWithType('error', 'Hata',response.error_description);

				}
				this.setState({ loading: false });
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				alert(genelhata);
				this.setState({ loading: false });
			});






	}
	
	render() {
		console.log(this.props)
		const { navigation } = this.props;
		let { fadeAnim } = this.state;

		const { opacityValue, translateYValue } = this.state;

		const animatedStyle = {
			opacity: opacityValue,
			transform: [{ translateY: translateYValue }],
		};
		/*
	  return(

	  <WebView
	source={{uri: 'https://kurumsalb2c.com/dyolog/login?encodedparameter=emMyYVk2SEIxZ05Mbk5qeW53eXVkT0d6YmkxRHM5N3VIajR3VVUwMDYzYkpKaUlsVUZxcVdQT1hKdVZJR3dieDBneFdFcGpvbHVqd1NWZy9wUVFYT0E9PQ=='}}
	style={{flex:1,width:Dimensions.get('window').width,height:Dimensions.get('window').height,marginTop:Platform.OS==='ios' ? 20: 20}}
      />

	  )
	  */
		if(this.state.closelogin){
			return (
				<Animated.View style={{backgroundColor:'black',flex:1,
						opacity: fadeAnim,         // Bind opacity to animated value


				}}>
				<StatusBar
				backgroundColor={'transparent'}
				translucent={false}
				barStyle="light-content"
				/>

				<Image 
				resizeMode={Platform.OS=='ios'?"repeat":null}	    

				source={require('./bg.jpg')} style={{position:'absolute',top:0,left:0,zIndex:0,opacity:.08}}
				/>

				<KeyboardAvoidingView  behavior="padding" enabled style={styles.container}>
				<Image 
				resizeMode={Platform.OS=='ios'?"repeat":null}	    

				source={require('./bg.jpg')} style={{position:'absolute',top:0,left:0,zIndex:0,opacity:.08}}
				/>
				<View style={{height:10,width:10}}/>
				<View style={{alignItems:'center',justifyContent:'center',width:Dimensions.get('window').width,backgroundColor:'transparent'}}>
				{Platform.OS=='ios'&&

					<LottieView 	   style={{width:Dimensions.get('window').width/1.3}}     source={require('./world_locations.json')}
					autoPlay
					loop
					/>
				}
				</View>

				<View>

				<Text style={material.title,{color:'white',fontSize:20,marginBottom:10,fontWeight:'800',textAlign:'center',marginBottom:20}}>Fırsatlar Kulübü</Text>

				<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
				style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="kullanıcı adı"
				onChangeText={(UserName) => this.setState({UserName})}
				value={this.state.UserName}
				/>
				<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
				style={{height: 40, width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="şifre"
				secureTextEntry={true}

				onChangeText={(Password) => this.setState({Password})}
				value={this.state.Password}

				/>
				<Text style={{color:'white',textAlign:'right',marginTop:10,marginBottom:10}} onPress={()=>this.props.navigation.navigate('Sifre')}>Şifremi Unuttum</Text>
				</View>
				<TouchableOpacity onPress={()=>this.dologin()} style={{ opacity:.8,height:50,width:Dimensions.get('window').width/1.2,borderWidth:2,borderColor:'white',backgroundColor:'#123962',alignItems:'center',justifyContent:'center'}}>
				{!this.state.loading &&
					<Text style={{color:'white',margin:15}}>Giriş Yap</Text>
				}
				{this.state.loading &&
						<ActivityIndicator size="small" color="white" />

				}

				</TouchableOpacity>
				<Text style={{color:'white',textAlign:'right',marginTop:10,marginBottom:10}} onPress={()=>this.props.navigation.navigate('Kayit')}>Hesabınız yok mu?<Text style={{color:'yellow'}}> Kayıt Olun</Text></Text>



				</KeyboardAvoidingView>
				<DropdownAlert ref={ref => this.dropdown = ref} />

				</Animated.View>

			);}
		else{

			return(
				<KeyboardAvoidingView  behavior="padding" enabled style={{flex:1,height:Dimensions.get('window').height+100}}>
				<StatusBar
				backgroundColor={'transparent'}
				translucent={true}
				barStyle="dark-content"
				/>
	<Appbar.Header
		style={{backgroundColor:'white',
				zIndex:1000,width:Dimensions.get('window').width,}} dark={false} statusBarHeight={Platform.OS=='ios'?20:0}

		>

		<Appbar.Content
		title="Fırsatlar Kulübü"
		/>
		<Appbar.Action icon="search" onPress={()=>{

this.props.navigation.navigate('Arama', {
	token: this.state.token,
	searchkey: this.state.searchkey,
})
		}
		} />
		<Appbar.Action icon="person-outline" onPress={()=>{
			this.props.navigation.navigate('Diger', {
				token: this.state.token,
				searchkey: this.state.searchkey,
			})
		}} />
		</Appbar.Header>

		
				<ScrollView style={{flex:1,zIndex:5}}
				onScroll={this.handleScroll.bind(this)}
				>
				{this.state.selectedcase && 

					<View>
					{this.state.slider&&
						<ImageSlider images={this.state.slider} style={{height:220,flex:1}}/>
					}
					{this.state.selectedcase && 
							<View style={{}}>

							{this.state.shopcase &&
								<View style={{height:55,borderBottomColor:renk,borderBottomWidth:.5}}>
								<FlatList horizontal={true} style={{paddingLeft:5,paddingRight:5,height:55}}
								data={this.state.shopcase}


								renderItem={({item}) => <TouchableOpacity style={{padding:5,borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:10,alignItems:'center',justifyContent:'center',backgroundColor:this.state.selected===item.Name?renk:'#dddddd',borderColor:'gray',marginLeft:8}}
									onPress={()=>{this.setState({selectedcase:item.Products},function(){
										this.setState({selected:item.Name})


									})}}
									><Text style={{color:this.state.selected===item.Name?'white':'#888',fontWeight:'800'}}
									onPress={()=>{this.setState({selectedcase:item.Products},function(){
										this.setState({selected:item.Name})

									})}} >{item.Name}</Text></TouchableOpacity>}
								/>
								</View>
							}

						{this.state.selectedcase && 
								<FlatList scrollEnabled={false} horizontal={false} 
							style={{paddingBottom:0}}
							data={this.state.selectedcase}
							renderItem={({item}) => <TouchableOpacity onPress={()=>this.props.navigation.navigate('Urun',{token:this.props.navigation.state.params.token,urun:item.Id})} >
							<View style={{flexDirection:'column',alignItems:'center',width:Dimensions.get('window').width-20,backgroundColor:'white',margin:10,elevation:4,borderRadius:8}}>
							<Image
							style={{ width: Dimensions.get('window').width, height: 150,margin:10,}}
							resizeMode={'contain'}
							source={{ uri: 'https:' + item.Image }}
							/>
							<View style={{flexDirection:'column',marginTop:4,alignItems:'center',justifyContent:'center',width:200}}>
							<Text style={{color:'black',fontSize:14}}>{item.Name}</Text><Text style={{color:'black',fontSize:16}}>{item.Brand}</Text>
							<Text style={{color:'black',fontSize:14}}>{item.Model}</Text>
							{item.Price > 1 &&
								<Text style={{color:'black',fontSize:20,fontWeight:'800'}}>{item.Price} TL</Text>
							}
		
							</View>
							{item.Price < 1 &&
							<View style={{position:'absolute',alignItems:'center',justifyContent:'center',bottom:20,right:21,backgroundColor:'purple',width:60,height:60,borderRadius:30}}><Text style={{color:'white',fontSize:24,fontWeight:'800'}}>{item.Name.split(" ")[0]}</Text></View>
							}
							</View></TouchableOpacity>}
								/>
						}

		



							<View style={{height:55}}/>
							</View>
					}

					</View>
				}
				</ScrollView>


{false&&
				<View style={{position:'absolute',paddingLeft:30,zIndex:100,paddingRight:30,paddingTop:5,bottom:0,height:60,backgroundColor:Platform.OS=='ios'?'white':'white',width:Dimensions.get('window').width,justifyContent:'space-between',flexDirection:'row'}}>
				{Platform.OS == 'ios' &&

					<BlurView
					style={{width:Dimensions.get('window').width,position:'absolute',height:60}}
					viewRef={this.state.viewRef}
					blurType="light"
					blurAmount={10}
					/>
				}
				<View style={{alignItems:'center',justifyContent:'center'}}>
				<Icon2 name="home" size={21} color="#333" style={{marginBottom:1}} />

				<Text style={{fontWeight:'100',fontSize:12,color:'#333'}}>Ana Sayfa</Text>
				</View>
				<View style={{alignItems:'center',justifyContent:'center'}}>
				<Icon2 name="magnifier" size={21} color="#ddd" style={{marginBottom:1}} onPress={()=>

					this.props.navigation.navigate('Arama', {
						token: this.state.token,
						searchkey: this.state.searchkey,
					})
				}/>

				<Text style={{fontWeight:'100',fontSize:12,color:'#ccc'}}>Arama</Text>
				</View>
				<View style={{alignItems:'center',justifyContent:'center'}}>
				<Icon2 name="trophy" size={23} color="#ddd" style={{marginBottom:1}}
				onPress={()=>

					this.props.navigation.navigate('Firsatlar', {
						token: this.state.token,
						searchkey: this.state.searchkey,
					})
				}
				/>

				<Text style={{fontWeight:'100',fontSize:12,color:'#ccc'}}>Fırsatlar</Text>
				</View>
				
				{true &&
					<View style={{alignItems:'center',justifyContent:'center'}}>
					<Icon2 name="handbag" size={21} color="#ddd" style={{marginBottom:1}}
					onPress={()=>

						this.props.navigation.navigate('Sepet', {
							token: this.state.token,
							searchkey: this.state.searchkey,
						})
					}


					/>
					<Text style={{fontWeight:'100',fontSize:12,color:'#ccc'}}>Sepetim</Text>
					</View>


				}
				



				</View>
}
				</KeyboardAvoidingView>
			)
		}

	}
}




class SearchScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null,
		
	};

	render(){
		return(<View/>


		)

	}
}
class FirsatlarScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Fırsatlar',
		header:null,
		tabBarIcon: ({ focused,tintColor }) => (
			focused ? 	<Icon2 name="trophy" size={21} color="purple" style={{marginBottom:1}} />
			:				<Icon2 name="trophy" size={21} color="#ccc" style={{marginBottom:1}} />


			 
		  ),
	};
	componentDidMount(){

		var self =this
		Realm.open({ schema: [uyeSchema,notificationSchema], schemaVersion: 5 })
						.then(realm => {
							//alert(JSON.stringify(realm.objects('Uyeler')["0"].token))
							self.setState({token:realm.objects('Uyeler')["0"].token},function(){
							//	self.showcart()


		fetch('https://www.firsatlarkulubu.com/oauth/api/catalog/list/', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + this.state.token,
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: 'Id=',
		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				// alert(JSON.stringify(response))
				this.setState({catdata:response})
				this.bringcampaings(response[0].Id)
			})

							});
						})





	}

	bringcampaings(a){
		this.setState({loading:true})
		//	alert(a)
		fetch('https://www.firsatlarkulubu.com/oauth/api/product/list/', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' +  this.state.token,
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: 'CategoryId=' +
			a +
			'&Keywords=&OrderBy=0&BrandName=&PriceMin=&PriceMax=&P1=0&P2=100',
		})
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				// alert(JSON.stringify(response))
				this.setState({loading:false,productdata:response.Products})   })
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(error);
			});

	}

	render(){
		return(
			<View style={{height:Dimensions.get('window').height}}>

			<View>
			<HHeader baslik="Fırsatlar" title={this}  arkaplan={renk}/>


			{this.state.loading &&true &&<View style={{opacity:.7,width:Dimensions.get('window').width,height:Dimensions.get('window').height,alignItems:'center',justifyContent:'center',zIndex:100,position:'absolute'}}>
				<ActivityIndicator size="small" color="orange" />
				<Text style={{color:'white'}}>bekleyiniz...</Text>
				</View>
			}

			{this.state.catdata  &&
					<FlatList horizontal={true} style={{paddingLeft:5,paddingRight:5,backgroundColor:'#fdfdfd'}}
				data={this.state.catdata}
				renderItem={({item}) => <TouchableOpacity style={{padding:10,backgroundColor:'transparent',borderColor:'gray',margin:8}} onPress={()=>this.bringcampaings(item.Id)}><Text style={{color:'black',fontWeight:'100'}}>{item.Name}</Text></TouchableOpacity>}
					/>
			}
			</View>
			<ScrollView >


			{this.state.productdata  &&
				<FlatList horizontal={false} style={{paddingLeft:0,paddingRight:0}}
				data={this.state.productdata}
				renderItem={({item}) => <TouchableOpacity onPress={()=>this.props.navigation.navigate('Urun',{token:this.props.navigation.state.params.token,urun:item.Id})} >
					<View style={{flexDirection:'column',margin:20,alignItems:'center',width:Dimensions.get('window').width-20,backgroundColor:'white',margin:10,elevation:4,borderRadius:8}}>
					<Image
					style={{ width: Dimensions.get('window').width, height: 150,margin:10,}}
					resizeMode={'contain'}
					source={{ uri: 'https:' + item.Image }}
					/>
					<View style={{flexDirection:'column',marginTop:4,alignItems:'center',justifyContent:'center',width:200}}>
					<Text style={{color:'black',fontSize:12}}>{item.Name}</Text><Text style={{color:'black',fontSize:16}}>{item.Brand}</Text>
					<Text style={{color:'black',fontSize:12}}>{item.Model}</Text>
					{item.Price > 1 &&
						<Text style={{color:'black',fontSize:12}}>{item.Price}</Text>
					}

					</View>
					</View>
					</TouchableOpacity>}
				/>
			}

			</ScrollView>
		

			</View>



		)

	}
}
class ProfilScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Ayarlar',
		header:null
	};

	render(){
		return(
			<View>
			<HHeader baslik="Profilim" title={this}/>

			</View>



		)

	}
}
class Siparisler extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};
	componentDidMount(){

		this.customerorders()

	}


	customerorders(){
		this.setState({ loading: true });
		//    this.productcount();
		//	  this.categorylist()
		fetch(
			'https://www.firsatlarkulubu.com/oauth/api/customer/orders/' ,
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + this.state.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},

				//	body: 'CategoryId='+this.state.ddd[0].Id+'&Keywords=&OrderBy=&BrandName=&PriceMin=0&PriceMax=1000&P1=0&P2=100',
			}
		)
			.then(response => {
				const statusCode = response.status;
				// alert(statusCode)
				return response.json();
			})
			.then(response => {
				//	alert(JSON.stringify(response))
				this.setState({ loading: false,orders:response });
			})
			.catch(error => {
				//this.props.navigation.navigate('Home')
				// alert(error);
			});


	}

	render(){
		return(
			<View>
			<HHeader baslik="Siparişlerim" title={this}/>


			{this.state.orders  &&
				<FlatList horizontal={false} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height-60,backgroundColor:'#ddd'}}
				data={this.state.orders}
				renderItem={({item}) => <TouchableOpacity style={{backgroundColor:'white',padding:10,borderRadius:9,borderColor:'#eee',borderBottomWidth:.5,marginBottom:0,margin:15 }} onPress={()=>this.props.navigation.navigate('SiparisDetay',{token:this.state.token,siparis:item.OrderId})} >
					<View style={{flexDirection:'row',alignItems:'center',width:Dimensions.get('window').width,justifyContent:'center',marginLeft:20,}}>
					<View style={{flexDirection:'column',marginTop:4,width:Dimensions.get('window').width,marginLeft:20}}>
					<Text style={{color:'black',fontSize:12}}>Sipariş Tarihi: {item.OrderDate}</Text><Text style={{color:'black',fontSize:16}}>Sipariş Durumu: {item.OrderState}</Text><Text style={{color:'black',fontSize:12}}>Sipariş No: {item.OrderNumber}</Text>
					</View>
					</View></TouchableOpacity>}
				/>
			}


			{this.state.loading &&true &&<View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height,alignItems:'center',justifyContent:'center',zIndex:900,position:'absolute'}}>
					<ActivityIndicator size="small" color="black" />
					<Text style={{color:'black'}}>bekleyiniz...</Text>
					</View>
			}


			</View>




		)

	}
}
var baslik


class SiparisDetay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};
	componentDidMount(){

		this.customerordersdetail()

	}


	customerordersdetail(){
		this.setState({ loading: true });
		//    this.productcount();
		//	  this.categorylist()
		fetch(
			'https://www.firsatlarkulubu.com/oauth/api/customer/orders-detail/'+this.props.navigation.state.params.siparis ,
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + this.props.navigation.state.params.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},

				//	body: 'CategoryId='+this.state.ddd[0].Id+'&Keywords=&OrderBy=&BrandName=&PriceMin=0&PriceMax=1000&P1=0&P2=100',
			}
		)
			.then(response => {
				const statusCode = response.status;
				// alert(statusCode)
				return response.json();
			})
			.then(response => {
				//alert(JSON.stringify(response))
				this.setState({ loading: false,siparis:response });
				baslik=  "Sipariş Detayı"      })
			.catch(error => {
				//this.props.navigation.navigate('Home')
				// alert(error);
			});


	}

	render(){
		return(
			<View>{this.state.siparis  &&

				<HHeader baslik={baslik} title={this}/>
			}


			{this.state.siparis  &&
					<Text>{JSON.stringify(this.state.siparis)}</Text>  }


			{this.state.loading &&true &&<View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height,alignItems:'center',justifyContent:'center',zIndex:900,position:'absolute'}}>
					<ActivityIndicator size="small" color="black" />
					<Text style={{color:'black'}}>bekleyiniz...</Text>
					</View>
			}


			</View>





		)

	}
}




class DigerScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Ayarlar',
		header:null,
		tabBarIcon: ({ focused,tintColor }) => (
			focused ? <Icon2 name="handbag" size={21} color="purple" style={{marginBottom:1}} />
			:<Icon2 name="handbag" size={21} color="#ccc" style={{marginBottom:1}} />
		),	
	};


	dologin() {
		if(this.state.Password == '' || this.state.UserName == '' || typeof this.state.UserName == undefined ||  typeof this.state.Password == undefined  )return
		this.dropdown.alertWithType('info', 'Bilgi','Giriş yapılıyor...');

		var encodedString='' ;
		//	  var text = 'foo © bar 𝌆 baz';
		//var bytes = utf8.encode(text);
		//var encoded = binaryToBase64(bytes);
		// if(true){
		// this.setState({ loading: true });
		// alert(encodedString),
		//


		this.setState({loading:true})		  
		fetch('https://www.firsatlarkulubu.com/oauth/api/auth', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },

			body: 'UserName=' +
			encodeURIComponent(this.state.UserName) +
			'&Password=' +
			encodeURIComponent(this.state.Password) +
			'&grant_type=password',
		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				//this.props.navigation.navigate('Proje', {
				//  UserName: this.state.UserName,
				//  Password: this.state.Password,
				//});
				//
				// alert(JSON.stringify(response))
				//  alert(response.LoginControl)
			//	alert(JSON.stringify(response))
				//  
				if (response.LoginControl == 'Success' ) {

					Realm.open({ schema: [uyeSchema,notificationSchema], schemaVersion: 5 })
						.then(realm => {
							realm.objects('Uyeler'); //Tüm objeleri geri dönderir.
							//  alert(realm.objects('Uyeler').filtered('username="'+this.state.UserName+'"').length)

							if (
								realm
								.objects('Uyeler')
								.filtered('username="' + this.state.UserName + '"').length < 1
							) {
								//	 alert(JSON.stringify(realm.objects('Uyeler').filtered('username="'+this.state.UserName+'"')))
								Realm.open({ schema: [uyeSchema,notificationSchema], schemaVersion: 5 })
									.then(realm => {
										realm.write(() => {
											realm.create('Uyeler', {
												username: this.state.UserName,
												mail: this.state.UserName,
												sifre: encodeURIComponent(this.state.Password),
												rank: 2,
												token: response.access_token,
												sepet: 0,
											});
										});
									})
									.catch(error => {
										console.log(error);
									});
							} else {


							}
							// alert(JSON.stringify(realm.objects('Uyeler').filtered('username="gokhanamal"')) )    //Username'i gokhanamal olan objeleri geri dönderir.
						})
						.catch(error => {
							console.log(error);
						});





					this.setState({token:response.access_token,
						UserName: this.state.UserName,
						Password: encodeURIComponent(this.state.Password),

					},function(){

						this.setState({closelogin:false})
						this.props.navigation.navigate('Home',{UserName:this.state.UserName,Password: encodeURIComponent(this.state.Password),token: response.access_token})
						//	this.bringcategories()
						//	this.showshopcase()
						//	this.showslider()
						//	this.getparameters()
						setInterval(() => {

							//	this.showcart()

						}, 2000);



					})

					//	return
				} else {
					this.dropdown.alertWithType('error', 'Hata',response.error_description);

				}
				this.setState({ loading: false });
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				alert(genelhata);
				this.setState({ loading: false });
			});






	}



	render(){

		if(this.state.closelogin){
			return (
				<View style={{backgroundColor:'black',flex:1,


				}}>

				<Image 
				resizeMode={Platform.OS=='ios'?"repeat":null}	    

				source={require('./bg.jpg')} style={{position:'absolute',top:0,left:0,zIndex:0,opacity:.08}}
				/>

				<KeyboardAvoidingView  behavior="padding" enabled style={styles.container}>
				<Image 
				resizeMode={Platform.OS=='ios'?"repeat":null}	    

				source={require('./bg.jpg')} style={{position:'absolute',top:0,left:0,zIndex:0,opacity:.08}}
				/>
				<View style={{height:10,width:10}}/>
				<View style={{alignItems:'center',justifyContent:'center',width:Dimensions.get('window').width,backgroundColor:'transparent'}}>
				{Platform.OS=='ios'&&

					<LottieView 	   style={{width:Dimensions.get('window').width/1.3}}     source={require('./world_locations.json')}
					autoPlay
					loop
					/>
				}
				</View>

				<View>

				<Text style={material.title,{color:'white',fontSize:20,marginBottom:10,fontWeight:'800',textAlign:'center',marginBottom:20}}>Fırsatlar Kulübü</Text>

				<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
				style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="kullanıcı adı"
				onChangeText={(UserName) => this.setState({UserName})}
				value={this.state.UserName}
				/>
				<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
				style={{height: 40, width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="şifre"
				secureTextEntry={true}

				onChangeText={(Password) => this.setState({Password})}
				value={this.state.Password}

				/>
				<Text style={{color:'white',textAlign:'right',marginTop:10,marginBottom:10}} onPress={()=>this.props.navigation.navigate('Sifre')}>Şifremi Unuttum</Text>
				</View>
				<TouchableOpacity onPress={()=>this.dologin()} style={{ opacity:.8,height:50,width:Dimensions.get('window').width/1.2,borderWidth:2,borderColor:'white',backgroundColor:'#123962',alignItems:'center',justifyContent:'center'}}>
				{!this.state.loading &&
					<Text style={{color:'white',margin:15}}>Giriş Yap</Text>
				}
				{this.state.loading &&
						<ActivityIndicator size="small" color="white" />

				}

				</TouchableOpacity>
				<Text style={{color:'white',textAlign:'right',marginTop:10,marginBottom:10}} onPress={()=>this.props.navigation.navigate('Kayit')}>Hesabınız yok mu?<Text style={{color:'yellow'}}> Kayıt Olun</Text></Text>



				</KeyboardAvoidingView>
				<DropdownAlert ref={ref => this.dropdown = ref} />

				</View>

			);}
		else{



			return(
				<View>
				<HHeader baslik="Diğer" title={this} arkaplan={renk}/>
				<ScrollView>
				<View style={{padding:0}}>

				<TouchableOpacity  style={{backgroundColor:'white',width:Dimensions.get('window').width,marginTop:0,padding:10,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>this.props.navigation.navigate('Siparisler',{token:this.props.navigation.state.params.token})}>

				<Text style={{color:'gray',fontSize:20}} onPress={()=>this.props.navigation.navigate('Siparisler',{token:this.props.navigation.state.params.token})}>Siparişlerim</Text>
				<Icon2 name="arrow-right" size={20} color="gray" />

				</TouchableOpacity>
				<TouchableOpacity  style={{backgroundColor:'white',width:Dimensions.get('window').width,marginTop:0,padding:10,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>this.props.navigation.navigate('SifreDegistir',{token:this.props.navigation.state.params.token})}>

				<Text style={{color:'gray',margin:0,fontSize:20}} onPress={()=>this.props.navigation.navigate('SifreDegistir',{token:this.props.navigation.state.params.token})}>Şifremi Değiştir</Text>
				<Icon2 name="arrow-right" size={20} color="gray" />


				</TouchableOpacity>

				<TouchableOpacity  style={{backgroundColor:'white',width:Dimensions.get('window').width,marginTop:0,padding:10,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>this.props.navigation.navigate('Hesabim',{token:this.props.navigation.state.params.token})}>

				<Text style={{color:'gray',margin:0,fontSize:20}} onPress={()=>this.props.navigation.navigate('Hesabim',{token:this.props.navigation.state.params.token})}>Hesap Ayarları</Text>
				<Icon2 name="arrow-right" size={20} color="gray" />

				</TouchableOpacity>
				{false &&
				<TouchableOpacity  style={{backgroundColor:'white',width:Dimensions.get('window').width,marginTop:0,padding:10,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>this.props.navigation.navigate('KVKK',{token:this.props.navigation.state.params.token})}>
				<Text style={{color:'gray',margin:0,fontSize:20}} onPress={()=>this.props.navigation.navigate('KVKK',{token:this.props.navigation.state.params.token})}>Kişisel Verileri Koruma Kanunu</Text>
				<Icon2 name="arrow-right" size={20} color="gray" />

				</TouchableOpacity>
				}
				<TouchableOpacity  style={{backgroundColor:'white',width:Dimensions.get('window').width,marginTop:0,padding:10,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{
					this.setState({UserName:'',Password:'',token:null,closelogin:true})
				}}>
				<Text style={{color:'gray',margin:0,fontSize:20}} onPress={()=>{
					this.setState({token:null,UserName:'',Password:'',closelogin:true});
					Realm.open({
						schema: [uyeSchema,notificationSchema],
						schemaVersion: 5,
					}).then(realm => {
						realm.write(() => {
							realm.deleteAll();
						});
				this.props.navigation.navigate('Intro')
						
						//CodePush.restartApp();
					});


				}}>Çıkış</Text>
				<View/>	
				</TouchableOpacity>

				</View>
				</ScrollView>
				<DropdownAlert ref={ref => this.dropdown = ref} />

				</View>




			)}

	}
}
class SepetScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}
	static navigationOptions = {
		title: 'Sepetim',
		header:null,
		tabBarIcon: ({ focused,tintColor }) => (
			focused ? 	<Icon2 name="handbag" size={21} color="purple" style={{marginBottom:1}} />
			:<Icon2 name="handbag" size={21} color="#ccc" style={{marginBottom:1}} />


			 
		  ),
	};
	componentDidMount(){
		var self =this
		Realm.open({ schema: [uyeSchema,notificationSchema], schemaVersion: 5 })
						.then(realm => {
							//alert(JSON.stringify(realm.objects('Uyeler')["0"].token))
							self.setState({token:realm.objects('Uyeler')["0"].token},function(){
								self.showcart()
							});
						})
		//this.showcart()
	}
	showcart(){
//alert(this.state.token)
		this.setState({ loading: true });
		//    this.productcount();
		//	  this.categorylist()
		fetch(
			'https://www.firsatlarkulubu.com/oauth/api/shoppingcart/list/' ,
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + this.state.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},

				//	body: 'CategoryId='+this.state.ddd[0].Id+'&Keywords=&OrderBy=&BrandName=&PriceMin=0&PriceMax=1000&P1=0&P2=100',
			}
		)
			.then(response => {
				const statusCode = response.status;
				// alert(statusCode)
				return response.json();
			})
			.then(response => {
					//alert(JSON.stringify(response))
				var fruits = [];
				this.setState({ loading: false,cart:response });
			})
			.catch(error => {
				//this.props.navigation.navigate('Home'
				alert(error);
			});


	}
	addtocart(){
		const { navigation } = this.props;

		this.setState({ loading: true });
		//    this.productcount();
		//	  this.categorylist()
		fetch(
			'https://www.firsatlarkulubu.com/oauth/api/shoppingcart/add-item/' +
			this.props.navigation.state.params.urun,
			{
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + this.state.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},

				//	body: 'CategoryId='+this.state.ddd[0].Id+'&Keywords=&OrderBy=&BrandName=&PriceMin=0&PriceMax=1000&P1=0&P2=100',
			}
		)
			.then(response => {
				const statusCode = response.status;
				// alert(statusCode)
				return response.json();
			})
			.then(response => {
				this.props.navigation.navigate('Sepet',{token: this.props.navigation.state.params.token,urun: this.props.navigation.state.params.urun})

				this.setState({ loading: false });
			})
			.catch(error => {
				//this.props.navigation.navigate('Home')
				// alert(error);
			});


	}
	refresh() {
		this.setState({ token: this.state.token });
		//alert(JSON.stringify(this.props))
		this.showcart();
		//  this.productcount()
	}
	urunsil(id) {
		fetch('https://www.firsatlarkulubu.com/oauth/api/shoppingcart/update-item', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' +  this.state.token,
				Accept: 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: 'ProductId=' + id + '&Quantity=0',
		})
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				this.setState({ loading: false, addressgetcitydata: response });
				//  alert(JSON.stringify(response.ResultMessage));
				this.showcart();
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				alert(error);
			});
	}

	urunarttir(id, q) {
		fetch('https://www.firsatlarkulubu.com/oauth/api/shoppingcart/update-item', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + this.state.token,
				Accept: 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: 'ProductId=' + id + '&Quantity=' + q,
		})
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				this.setState({ loading: false, addressgetcitydata: response });
				// alert(JSON.stringify(response.ResultMessage));
				this.showcart();
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				alert(error);
			});
	}

	urunazalt(id, q) {
		fetch('https://www.firsatlarkulubu.com/oauth/api/shoppingcart/update-item', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' +  this.state.token,
				Accept: 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: 'ProductId=' + id + '&Quantity=' + q,
		})
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				this.setState({ loading: false, addressgetcitydata: response });
				// alert(JSON.stringify(response.ResultMessage));
				this.showcart();
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				alert(error);
			});
	}

	render(){
		return(<View style={{height:Dimensions.get('window').height-StatusBar.currentHeight}}>

			{this.state.loading &&true &&<View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height,alignItems:'center',justifyContent:'center',zIndex:900,position:'absolute'}}>
				<ActivityIndicator size="small" color="black" />
				<Text style={{color:'black'}}>bekleyiniz...</Text>
				</View>
			}

			<HHeader baslik="Sepetim" title={this}  arkaplan={renk}/>

			<ScrollView >


			{this.state.loading &&true &&<View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height,alignItems:'center',justifyContent:'center',zIndex:900,position:'absolute'}}>
				<ActivityIndicator size="small" color="orange" />
				<Text style={{color:'white'}}>bekleyiniz...</Text>
				</View>
			}

			{!!this.state.cart && !!this.state.cart.Items&& (
				<FlatList
				style={{height:Dimensions.get('window').height}}
				data={this.state.cart.Items}
				renderItem={({ item }) => (
					<View>
					<View
					style={{margin:10,
							flexDirection: 'column',
							padding: 5,
							marginBottom: 2,
							backgroundColor:'white',borderRadius:10,borderColor:renk,borderWidth:.5
					}}>
					<Text style={{ color: 'red',fontSize:20 ,margin:5,textAlign:'right'}}
					onPress={() => this.urunsil(item.ProductId)}

					>ürünü sil</Text>



					<View
					style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image defaultSource={require('./noimage.jpg')} 
					style={{ width: 120, height: 120 }}
					source={{
						uri: 'https:' + item.ProductImage,
							headers: {
								Pragma: 'no-cache',
							},
					}}
					/>
					<TouchableOpacity
					onPress={() =>
						this.props.navigation.navigate('Urun', {
							urun: item.ProductId,
							token: this.props.navigation.state.params.token,
						})}
					style={{ marginLeft: 10 }}>
					<Text style={{ color: 'black', fontSize: 14 }}>
					{item.Brand} {item.Model}{' '}
					</Text>
					<Text style={{ color: 'black', fontSize: 14,width:Dimensions.get('window').width/2 }}>
					{item.ProductName}
					</Text>
					</TouchableOpacity>
					</View>
					<View style={{ flexDirection: 'row', flex: 1 }}>
					<View
					style={{
						backgroundColor: 'white',

							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							margin: 4,
					}}>
					<View style={{ flexDirection: 'row',backgroundColor:'#eee',padding:2 ,borderRadius:10,borderColor:'gray',borderWidth:.5}}>
					<TouchableOpacity
					style={{
						backgroundColor: 'white',
							borderRadius: 10,
							width: 30,
							height: 30,
							alignItems: 'center',
							borderColor: '#ccc',
							borderWidth: 0.5,
					}}
					onPressIn={() =>
						this.urunazalt(
							item.ProductId,
							item.Quantity - 1
						)
					}>
					<Text style={{ fontSize: 20, color: '#333' }}>
					-
					</Text>
					</TouchableOpacity>
					<TouchableOpacity
					onPressIn={() =>
						this.setState({
							promptVisible: true,
							pid: item.ProductId,
						})
					}>
					<Text
					style={{
						color: 'black',
							fontSize: 20,
							marginLeft: 15,
							marginRight: 15,
					}}>
					{item.Quantity}
					</Text>
					</TouchableOpacity>

					<TouchableOpacity
					style={{
						backgroundColor: 'white',
							borderRadius: 10,
							width: 30,
							height: 30,
							alignItems: 'center',
							borderColor: '#ccc',
							borderWidth: 0.5,
					}}
					onPressIn={() =>
						this.urunarttir(
							item.ProductId,
							item.Quantity + 1
						)
					}>
					<Text style={{ fontSize: 20, color: '#333' }}>
					+
					</Text>
					</TouchableOpacity>
					</View>
					</View>

					<TouchableOpacity
					style={{ position: 'absolute', bottom: 0, right: 5 }}>
					<Text style={{ color: 'black',fontWeight:'800',fontSize:24 }}>
					{item.Price} TL
					</Text>

					</TouchableOpacity>


					</View>
					</View>
					</View>
				)}
				/>
			)}


			</ScrollView>

			{this.state.cart && this.state.cart.Items&& this.state.cart.Items.length >0 &&
				<View style={{alignItems:'center',justifyContent:'space-between',backgroundColor:'#444',flexDirection:'row',paddingLeft:10,paddingRight:0,marginBottom:60}}>
				<View style={{flexDirection:'column'}}>
				<View>
				<Text style={{ color: '#fdfdfd',fontWeight:'100',fontSize:12 }}>
				Kargo: {this.state.cart.CargoTotal} TL
				</Text>
				</View>
				<View style={{flexDirection:'row'}}>

				<Text style={{fontSize:16,fontWeight:'800',color:'#fdfdfd'}}>Toplam:</Text>
				{!!this.state.cart &&
					<Text style={{fontSize:16,fontWeight:'800',color:'#fdfdfd'}}>{this.state.cart.Total} TL</Text>

				}
				</View>
				</View>

				<TouchableOpacity style={{margin:0,justifyContent:'flex-end'}} onPress={()=>{
					this.props.navigation.navigate('Odeme',{token:this.props.navigation.state.params.token})
				}}>
				<View style={{width:150,height:50,backgroundColor: renk,alignItems:'center',justifyContent:'center'}}>
				<Text style={{fontWeight:'100',color:'white'}}>Ödemeye Devam Et</Text>

				</View>

				</TouchableOpacity>


				</View>
			}

			{this.state.cart && this.state.cart.Items&&  this.state.cart.Items.length <1 &&
					<View style={{alignItems:'center',justifyContent:'center',width:Dimensions.get('window').width,backgroundColor:'transparent',position:'absolute',bottom:0}}>
					<Text style={{fontWeight:'800'}}>Sepetinizde ürün bulunmamaktadır.</Text>
					{Platform.OS=='ios'&&

						<LottieView 	   style={{width:Dimensions.get('window').width/1.3}}     source={require('./animation.json')}
						autoPlay
						loop
						/>
					}
					</View>


			}
			</View>

		)

	}
}
class KayitScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};
	doregister(){


		fetch('https://www.firsatlarkulubu.com/oauth/api/customer/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

			body: 'Username=' +this.state.UserName +
			'&Password=' +encodeURIComponent(this.state.Password) +
			'&grant_type=password'
			+'&Email='+this.state.Email
			+'&FirstName='+this.state.firstname
			+'&LastName='+this.state.lastname
			+'&Gsm='+this.state.gsm
			+'&DisplayCaptcha=true'
			+'&CompanyCode=a8745rL6sgZ'//+this.state.companycode

			+'&Email='+this.state.Email,



		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				// this.setState({ loading: false,errormessage:JSON.stringify(response.ResultMessage) });

				this.dropdown.alertWithType('info', 'Bilgi',response.ResultMessage);

			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(genelhata);
				this.setState({ loading: false });
			});



	}
	render(){
		return(
			<KeyboardAvoidingView   behavior={Platform.OS=='ios' ? "padding" :""}  enabled style={{backgroundColor:'black',flex:1,


			}}>
			<KeyboardAvoidingView style={styles.container}>
			<Image 

			source={require('./bg.jpg')} style={{position:'absolute',top:0,left:0,zIndex:0,opacity:.08}}
			/>
			<View style={{height:10,width:10}}/>
			<ScrollView>
			<KeyboardAvoidingView>
			<Text style={material.title,{color:'white',fontSize:20,marginBottom:10,fontWeight:'800',textAlign:'center',marginBottom:20}}>Fırsatlar Kulübü</Text>
			<Text style={material.title,{color:'white',fontSize:14,marginBottom:10,fontWeight:'100',textAlign:'center',marginBottom:20}}>Yeni Hesap Oluştur</Text>
			{this.state.errormessage &&
				<Text style={{color:'red'}}>{this.state.errormessage}</Text>
			}
			
			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'yellow',paddingLeft:10,marginBottom:10,color:'yellow'}} placeholder="Şirket Kodu" editable={false}
			onChangeText={(companycode) => this.setState({companycode})}
			value="a8745rL6sgZ - Tanımlı Şirket Kodu"
			/>

			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="İsim"
			onChangeText={(firstname) => this.setState({firstname})}
			/>
			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Soyisim"
			onChangeText={(lastname) => this.setState({lastname})}
			/>
			{false&&
				<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
				style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="kullanıcı adı"
				onChangeText={(UserName) => this.setState({UserName})}
				/>}
			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Eposta"
			onChangeText={(Email) => this.setState({Email})}
			/>
			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="GSM"
			onChangeText={(gsm) => this.setState({gsm})}
			/>

			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40, width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Şifre"
			secureTextEntry={true}

			onChangeText={(Password) => this.setState({Password})}
			/>
			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40, width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Şifre Tekrar"
			secureTextEntry={true}

			onChangeText={(Passwordt) => this.setState({Passwordt})}
			/>

			</KeyboardAvoidingView>
			</ScrollView>

			<TouchableOpacity onPress={()=>this.doregister()} style={{ opacity:.8,width:Dimensions.get('window').width/1.2,borderWidth:2,borderColor:'white',backgroundColor:'transparent',alignItems:'center',justifyContent:'center'}}>

			<Text style={{color:'white',margin:15}}>Hesabı Oluştur</Text>

			</TouchableOpacity>

			<Text style={{color:'white',textAlign:'right',marginTop:10,marginBottom:10}} onPress={()=>this.props.navigation.navigate('Home')}>Hesabınız var mı?<Text style={{color:'yellow'}}> Giriş Yapın</Text></Text>
			<DropdownAlert ref={ref => this.dropdown = ref} style={{height:250}} />

			</KeyboardAvoidingView>

			</KeyboardAvoidingView>







		)

	}
}




class SiparisBasarili extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};
	dorecover(){


		fetch('https://www.firsatlarkulubu.com/oauth/api/customer/password-recovery', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

			body: 
			'Email=' +this.state.email+'&Username='+this.state.username ,



		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				this.setState({ loading: false,errormessage:JSON.stringify(response.ResultMessage) });
				// alert(JSON.stringify(response.ResultMessage))

			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(genelhata);
				this.setState({ loading: false });
			});



	}

	render(){
		return(
			<View style={{backgroundColor:'black',flex:1,


			}}>
			<View style={styles.container}>
			<Image 
			resizeMode={Platform.OS=='ios'?"repeat":null}	    

			source={require('./bg.jpg')} style={{position:'absolute',top:0,left:0,zIndex:0,opacity:.08}}
			/>
			<View style={{height:10,width:10}}/>
			<Text style={{fontSize:20,fontWeight:'800',color:'white'}}>{this.props.navigation.state.params.urun.replace('<p>','').replace('</p>','')} </Text>
			<TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={{ opacity:.8,width:Dimensions.get('window').width/1.2,borderWidth:2,borderColor:'white',backgroundColor:'transparent',alignItems:'center',justifyContent:'center'}}>

			<Text style={{color:'white',margin:15}}>Anasayfaya Dön</Text>

			</TouchableOpacity>

			<Text style={{color:'white',textAlign:'right',marginTop:10,marginBottom:10}} onPress={()=>this.props.navigation.navigate('Home')}>İşlem tamamlandı.<Text style={{color:'yellow'}}> Siparişlerinize gözatabilirsiniz</Text></Text>

			</View>

			</View>



		)

	}
}

class Hesabim extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};
	doupdate(){


		fetch('https://www.firsatlarkulubu.com/oauth/api/customer/myaccount-update', {
			method: 'POST',
			headers: { 
				Authorization: 'Bearer ' +  this.props.navigation.state.params.token,
				Accept: 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: 
			'Email=' +this.state.email+'&FirstName='+this.state.firstname +
			'&GSM=' +this.state.gsm+'&LastName='+this.state.lastname ,



		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				this.setState({ loading: false,errormessage:JSON.stringify(response.ResultMessage) });
				this.dropdown.alertWithType('info', 'Bilgi',response.ResultMessage);


			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(genelhata);
				this.setState({ loading: false });
			});



	}

	getdetails(){
		this.dropdown.alertWithType('info', 'Bilgi','Bilgileriniz getiriliyor');
		fetch('https://www.firsatlarkulubu.com/oauth/api/customer/myaccount', {
			method: 'GET',
			headers: { 
				Authorization: 'Bearer ' +  this.props.navigation.state.params.token,
				Accept: 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded',
			},



		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				this.setState({ loading: false,firstname:response.FirstName,lastname:response.LastName,gsm:response.Gsm,email:response.Email });
				// alert(JSON.stringify(response.FirstName))

			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(genelhata);
				this.setState({ loading: false });
			});



	}
	componentDidMount(){

		this.getdetails()
	}
	render(){
		return(
			<View style={{flex:1,backgroundColor:'black'


			}}>
			<HHeader baslik="Hesap Ayarları" title={this} arkaplan={renk}/>

			<View style={{justifyContent:'center',alignItems:'center'}}>
			<View style={{height:10,width:10}}/>
			<ScrollView>
			<View style={{justifyContent:'center',alignItems:'center'}}>


			{this.state.errormessage &&
				<Text style={{color:'red'}}>{this.state.errormessage}</Text>
			}

			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="İsim"
			onChangeText={(firstname) => this.setState({firstname})}
			placeholder={this.state.firstname}

			/>
			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Soyİsim"
			onChangeText={(lastname) => this.setState({lastname})}
			placeholder={this.state.lastname}

			/>

			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Eposta" 
			disabled editable={false} selectTextOnFocus={false}
			onChangeText={(email) => this.setState({email})}
			placeholder={this.state.email}
			/>
			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="GSM"
			onChangeText={(gsm) => this.setState({gsm})}
			placeholder={this.state.gsm}

			/>

			</View>
			</ScrollView>

			<TouchableOpacity onPress={()=>this.doupdate()} style={{ opacity:.8,width:Dimensions.get('window').width/1.2,borderWidth:2,borderColor:'white',backgroundColor:'transparent',alignItems:'center',justifyContent:'center'}}>

			<Text style={{color:'white',margin:15}}>Hesabımı Güncelle</Text>

			</TouchableOpacity>

			</View>
			<DropdownAlert ref={ref => this.dropdown = ref} />

			</View>



		)

	}
}


class SifreDegistir extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};
	dorecover(){
		if(this.state.password1==this.state.password0){

			this.dropdown.alertWithType('error', 'Hata','Şifreler uyuşmuyor!');

			return}

		fetch('https://www.firsatlarkulubu.com/oauth/api/customer/changepassword', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

			body: 
			'OldPassword='+encodeURIComponent(this.state.passwordeski)+'&NewPassword='+encodeURIComponent(this.state.password1) ,



		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				this.setState({ loading: false,errormessage:JSON.stringify(response.ResultMessage) });
				alert(JSON.stringify(response.ResultMessage))

			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(genelhata);
				this.setState({ loading: false });
			});



	}

	render(){
		return(
			<View style={{flex:1,backgroundColor:'black'


			}}>
			<HHeader baslik="Şifremi Değiştir" title={this} arkaplan={renk}/>

			<View style={{justifyContent:'center',alignItems:'center'}}>
			<View style={{height:10,width:10}}/>
			<ScrollView>
			<View style={{justifyContent:'center',alignItems:'center'}}>


			{this.state.errormessage &&
				<Text style={{color:'red'}}>{this.state.errormessage}</Text>
			}

			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Geçerli şifrenizi giriniz"
			onChangeText={(passwordeski) => this.setState({passwordeski})}
			/>

			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Yeni şifrenizi giriniz"
			onChangeText={(password0) => this.setState({password0})}
			/>
			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Tekrar giriniz"
			onChangeText={(password1) => this.setState({password1})}
			/>


			</View>
			</ScrollView>

			<TouchableOpacity onPress={()=>this.dorecover()} style={{ opacity:.8,width:Dimensions.get('window').width/1.2,borderWidth:2,borderColor:'white',backgroundColor:'transparent',alignItems:'center',justifyContent:'center'}}>

			<Text style={{color:'white',margin:15}}>Şifremi Değiştir</Text>

			</TouchableOpacity>


			</View>
			<DropdownAlert ref={ref => this.dropdown = ref} />

			</View>



		)

	}
}

class AdresDegistir extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};
	adresdegistir(){


		fetch('https://www.firsatlarkulubu.com/oauth/api/customer/password-recovery', {
			method: 'POST',
			headers: { 
				Authorization: 'Bearer ' +  this.props.navigation.state.params.token,
				Accept: 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body: 
			'Username='+this.state.username ,



		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				this.setState({ loading: false,errormessage:JSON.stringify(response.ResultMessage) });
				alert(JSON.stringify(response.ResultMessage))

			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(genelhata);
				this.setState({ loading: false });
			});



	}
	componentDidMount(){


		fetch('https://www.firsatlarkulubu.com/oauth/api/customeraddress/list', {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + this.props.navigation.state.params.token,
				'Content-Type': 'application/x-www-form-urlencoded',
			},





		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				alert(JSON.stringify(response[0].Id))


				fetch('https://www.firsatlarkulubu.com/oauth/api/customeraddress/get/'+response[0].Id, {
					method: 'GET',
					headers: {
						Authorization: 'Bearer ' + this.props.navigation.state.params.token,
						'Content-Type': 'application/x-www-form-urlencoded',
					},





				})
					.then(response => {
						return response.json();
					})
					.then(response => {
						alert(JSON.stringify(response))


					})
					.catch(error => {
						this.props.navigation.navigate('Home');
						// alert(genelhata);
						this.setState({ loading: false });
					});



			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(genelhata);
				this.setState({ loading: false });
			});



	}

	render(){
		return(
			<View style={{flex:1,backgroundColor:'black'


			}}>
			<HHeader baslik="Şifremi Değiştir" title={this} arkaplan={renk}/>

			<View style={{justifyContent:'center',alignItems:'center'}}>
			<View style={{height:10,width:10}}/>
			<ScrollView>
			<View style={{justifyContent:'center',alignItems:'center'}}>


			{this.state.errormessage &&
				<Text style={{color:'red'}}>{this.state.errormessage}</Text>
			}

			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Geçerli şifrenizi giriniz"
			onChangeText={(passwordeski) => this.setState({passwordeski})}
			/>

			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Yeni şifrenizi giriniz"
			onChangeText={(password0) => this.setState({password0})}
			/>
			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Tekrar giriniz"
			onChangeText={(password1) => this.setState({password1})}
			/>


			</View>
			</ScrollView>

			<TouchableOpacity onPress={()=>this.dorecover()} style={{ opacity:.8,width:Dimensions.get('window').width/1.2,borderWidth:2,borderColor:'white',backgroundColor:'transparent',alignItems:'center',justifyContent:'center'}}>

			<Text style={{color:'white',margin:15}}>Adresi güncelle</Text>

			</TouchableOpacity>


			</View>

			</View>



		)

	}
}

class EditAddressScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			cart: '',
			gotocart: false,
			run: false,
			tcno: null,
			vergino: null,
			items: [],
		};
	}
	static navigationOptions = {
		title: 'Sepetim',
		header: null,
	};
	componentDidMount() {
		this.setState(
			{
				token: this.props.navigation.state.params.token,
				paymentway: this.props.navigation.state.params.paymentway,
				secilenadres: this.props.navigation.state.params.secilenadres,
			},
			function() {
				var alladdress = [];
				this.getaddressdetails(
					this.props.navigation.state.params.secilenadres,
					alladdress
				);
			}
		);
		//alert(JSON.stringify(this.props))
		// this.stepaddress();
		//	 alert( this.teslimatadresiref.selectedItem() )
		//alert(this.props.navigation.state.params.paymentway);
		// alert(this.props.navigation.state.params.secilenadres)
	}

	stepaddress() {
		this.setState({ stepaddress: true, loading: true });
		//GET /api/parameters/list
		//
		fetch('https://kurumsalb2c.com/B2C/oauth/api/parameters/list', {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' +  this.props.navigation.state.params.token,
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			//	body: '',
		})
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				if (response.CustomerAddressChangeable === false) {
					this.setState({ addresschangeable: false, acdone: true }, function() {
						// this.getaddresslist();
					});
				} else {
					this.setState({ addresschangeable: true, acdone: true }, function() {
						// this.getaddresslist();
					});
				}
				this.getaddresslist();
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				alert(error);
			});
	}

	getaddresslist() {
		fetch('https://kurumsalb2c.com/B2C/oauth/api/customeraddress/list', {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' +  this.props.navigation.state.params.token,
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			//	body: '',
		})
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				this.setState({ loading: false, addresslistdata: response });
				// alert(JSON.stringify(response))
				//
				var alladdress = [];
				var adresler = [];
				for (var r = 0; r < response.length; r++) {
					this.getaddressdetails(response[r].Id, alladdress);
					adresler.push({
						value0: response[r].Name + ' (' + response[r].CreateDate + ')',
						value: response[r].Id,
					});
					// this.getaddressdetails(response[r].Id, alladdress)
				}
				this.setState({ adresler: adresler });
				//alert(alladdress)
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				alert(error);
			});
	}
	pulltowndata(cityid) {
		fetch(
			'https://kurumsalb2c.com/B2C/oauth/api/customeraddress/town/' + cityid,
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' +  this.props.navigation.state.params.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},

				//body: 'id='+response.ShippingTownId,
			}
		)
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200 && 1 == 2) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				//	this.setState({loading:false,addressgettowndata:response,});
				var towndata = [];
				for (var i = 0; i < response.length; i++) {
					towndata.push({
						value: response[i]['Name'],
						id: response[i]['Id'],
					});
				}
				var sgh = [];
				for (var i = 0; i < response.length; i++) {
					sgh.push({ value: response[i].Id, label: response[i].Name });
				}

				//alert(JSON.stringify(response))
				// return false
				this.setState({
					loading: false,
					addressgettowndata: sgh,
					towndata: towndata,
				});
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				alert(error);
			});
	}
	getaddressdetails(id, alladdress) {
		this.setState({ loading: true });
		//alert(id +'---'+alladdress)

		fetch('https://www.firsatlarkulubu.com/oauth/api/customeraddress/get/' + id, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + this.props.navigation.state.params.token,
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			//body: 'id=',
		})
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200 && 1 == 2) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				alladdress.push({ response: response });
			//	 alert(JSON.stringify(alladdress));
				//  return false
				this.pulltowndata(response.ShippingCityId);

				this.setState({
					addressgetdata: alladdress,
					addressgetdatadone: true,
					loading: false,
					adress: response,
					isim: response.ShippingFirstName,
					soyisim: response.ShippingLastName,
					adres1: response.ShippingAddress,
					eposta: response.ShippingEmail,
					tcno: response.ShippingTcNumber,
					ceptel: response.ShippingGsm,
					favColor: response.ShippingCityId,
					favColor2: response.ShippingTownId,
					vergino: response.ShippingTaxNumber,
					firmaadi: response.ShippingCompanyName,
					postakodu: response.ShippingPostNumber,
					//ShippingTownId:response.ShippingTownName,ShippingCityId:response.ShippingCityName
				});

				// return;
				//alert(JSON.stringify(response))
				this.setState({ id: response.ShippingAddressId });
				//return

				fetch('https://kurumsalb2c.com/B2C/oauth/api/customeraddress/city/', {
					method: 'GET',
					headers: {
						Authorization: 'Bearer ' + this.props.navigation.state.params.token,
						'Content-Type': 'application/x-www-form-urlencoded',
					},

					//	body: '',
				})
					.then(response => {
						const statusCode = response.status;
						if (statusCode != 200 && 1 == 2) {
							alert('oturum süresi dolmuştur.');
							self.setState({ loading: false });
							const resetAction = NavigationActions.reset({
								index: 0,
								actions: [NavigationActions.navigate({ routeName: 'Home' })],
							});

							self.props.navigation.dispatch(resetAction);
							self.props.navigation.navigate('Home');
						} else {
							return response.json();
						}
					})
					.then(response => {
						var citydata = [];
						for (var i = 0; i < response.length; i++) {
							citydata.push({
								value: response[i]['Name'],
								id: response[i]['Id'],
							});
						}
						//	alert(JSON.stringify(response))
						// return false
						var sgh = [];
						for (var i = 0; i < response.length; i++) {
							sgh.push({ value: response[i].Id, label: response[i].Name });
						}
						this.setState({
							loading: false,
							addressgetcitydata: sgh,
							citydata: citydata,
						});
					})
					.catch(error => {
						this.props.navigation.navigate('Home');
						alert(error);
					});
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				alert(error);
			});
	}
	updateaddressdetails(id) {
		if (
			!this.state.isim ||
			!this.state.soyisim ||
			!this.state.alias ||
			!this.state.adres1 ||
			!this.state.eposta ||
			!this.state.ceptel ||
			!this.state.tcno ||
			!this.state.firmaadi ||
			!this.state.vergidairesi ||
			!this.state.vergino ||
			!this.state.favColor ||
			!this.state.favColor2
		) {
			this.setState({ errorv: true });
			alert('Hata, eksik bilgilerini kontrol ediniz.');
			if (!this.state.isim) {
				this.setState({ errorvisim: true });
			}
			if (!this.state.soyisim) {
				this.setState({ errorvsoyisim: true });
			}
			if (!this.state.alias) {
				this.setState({ errorvalias: true });
			}
			if (!this.state.adres1) {
				this.setState({ errorvadres1: true });
			}
			if (!this.state.eposta) {
				this.setState({ errorveposta: true });
			}
			if (!this.state.ceptel) {
				this.setState({ errorvceptel: true });
			}
			if (!this.state.tcno) {
				this.setState({ tcno: '' });
			}

			if (!this.state.firmaadi) {
				this.setState({ firmaadi: '' });
			}
			if (!this.state.vergidairesi) {
				this.setState({ vergidairesi: '' });
			}

			if (!this.state.vergino) {
				this.setState({ vergino: '' });
			}

			return;
		}
		this.setState({ loading: true });

		fetch(
			'https://kurumsalb2c.com/B2C/oauth/api/customeraddress/create-update/',
			{
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + this.state.token,
					Accept: 'application/x-www-form-urlencoded',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body:
				'ShippingAddressId=' +
				id +
				'&ShippingFirstName=' +
				this.state.isim +
				'&ShippingLastName=' +
				this.state.soyisim +
				'&ShippingName=' +
				this.state.alias +
				'&ShippingDescription=' +
				this.state.tanim +
				'&ShippingAddress=' +
				this.state.adres1 +
				'&ShippingPostNumber=' +
				this.state.postakodu +
				'&ShippingEmail=' +
				this.state.eposta +
				'&ShippingGsm=' +
				this.state.ceptel +
				'&ShippingTcNumber=' +
				this.state.tcno +
				'&ShippingCompanyName=' +
				this.state.firmaadi +
				'&ShippingTaxOffice=' +
				this.state.vergidairesi +
				'&ShippingTaxNumber=' +
				this.state.vergino +
				'&ShippingNote=' +
				this.state.not +
				'&ShippingCityId=' +
				this.state.favColor +
				'&ShippingTownId=' +
				this.state.favColor2,
			}
		)
			.then(response => {
				const statusCode = response.status;
				if (statusCode != 200) {
					alert('oturum süresi dolmuştur.');
					self.setState({ loading: false });
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Home' })],
					});

					self.props.navigation.dispatch(resetAction);
					self.props.navigation.navigate('Home');
				} else {
					return response.json();
				}
			})
			.then(response => {
				alert(JSON.stringify(response));
				this.setState({ loading: false });
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				alert(error);
			});
	}

	onChangeText(textz) {
		//alert(text)
		return;
		var sonuc = textz.split('***');
		alert(JSON.stringify(sonuc[1]));
		var alladdress = [];
		var self = this;
		//    self.getaddressdetails(JSON.stringify(sonuc[1]),alladdress);
		self.stepaddress();
	}
	render() {
		const { navigate } = this.props.navigation;
		let data = [
			{
				value: 'Banana',
			},
			{
				value: 'Mango',
			},
			{
				value: 'Pear',
			},
		];
		return (
			<View>
			<View
			style={{
				backgroundColor: 'white',
					width: Dimensions.get('window').width,
					height: Dimensions.get('window').height,
					zIndex: 199,
					position: 'absolute',
					padding: 0,
					flexDirection: 'column',
			}}>

			<HHeader baslik="Adresi Düzenle" title={this} arkaplan={renk}/>



			<ScrollView
			style={{
				padding: 20,
			}}>
			<View
			style={{
				borderColor: 'gray',
					backgroundColor: 'white',
					padding: 10,
					borderRadius: 10,
			}}>
			<Text style={{ paddingLeft: 10 }}>İsim</Text>
			<TextInput
			underlineColorAndroid="rgba(0,0,0,0)"
			editable={this.state.addresschangeable == false ? false : true}
			keyboardType="name-phone-pad"
			secureTextEntry={false}
			value={this.state.isim}
			style={{
				fontSize: 16,
					paddingTop: 13,
					paddingHorizontal: 10,
					paddingBottom: 12,
					borderWidth: 1,
					borderColor: this.state.errorvisim ? 'red' : '#f0f0f0',
					borderRadius: 4,
					backgroundColor: '#f0f0f0',
					color: 'black',
			}}
			onChangeText={isim => this.setState({ isim })}
			/>
			<Text style={{ paddingLeft: 10 }}>Soyisim</Text>
			<TextInput
			underlineColorAndroid="rgba(0,0,0,0)"
			editable={this.state.addresschangeable == false ? false : true}
			secureTextEntry={false}
			value={this.state.soyisim}
			style={{
				fontSize: 16,
					paddingTop: 13,
					paddingHorizontal: 10,
					paddingBottom: 12,
					borderWidth: 1,
					borderColor: this.state.errorvsoyisim ? 'red' : '#f0f0f0',
					borderRadius: 4,
					backgroundColor: '#f0f0f0',
					color: 'black',
			}}
			onChangeText={soyisim => this.setState({ soyisim })}
			/>
			<Text style={{ paddingLeft: 10 }}>Eposta</Text>
			<TextInput
			underlineColorAndroid="rgba(0,0,0,0)"
			value={this.state.eposta}
			disabled={true}
			secureTextEntry={false}
			style={{
				fontSize: 16,
					paddingTop: 13,
					paddingHorizontal: 10,
					paddingBottom: 12,
					borderWidth: 1,
					borderColor: this.state.errorveposta ? 'red' : '#f0f0f0',
					borderRadius: 4,
					backgroundColor: '#f0f0f0',
					color: 'black',
			}}
			onChangeText={eposta => this.setState({ eposta })}
			/>

			<Text style={{ paddingLeft: 10 }}>Cep telefonu</Text>
			<TextInput
			underlineColorAndroid="rgba(0,0,0,0)"
			keyboardType="number-pad"
			value={this.state.ceptel}
			secureTextEntry={false}
			style={{
				fontSize: 16,
					paddingTop: 13,
					paddingHorizontal: 10,
					paddingBottom: 12,
					borderWidth: 1,
					borderColor: this.state.errorvceptel ? 'red' : '#f0f0f0',
					borderRadius: 4,
					backgroundColor: '#f0f0f0',
					color: 'black',
			}}
			onChangeText={ceptel => this.setState({ ceptel })}
			/>

			<Text style={{ paddingLeft: 10 }}>Adres</Text>
			<TextInput
			underlineColorAndroid="rgba(0,0,0,0)"
			editable={this.state.addresschangeable == false ? false : true}
			multiline={true}
			value={this.state.adres1}
			secureTextEntry={false}
			style={{
				fontSize: 16,
					paddingTop: 13,
					paddingHorizontal: 10,
					paddingBottom: 12,
					borderWidth: 1,
					borderColor: this.state.errorvadres1 ? 'red' : '#f0f0f0',
					borderRadius: 4,
					backgroundColor: '#f0f0f0',
					color: 'black',
					height: 70,
			}}
			onChangeText={adres1 => this.setState({ adres1 })}
			/>
			</View>
			<View
			style={{
				borderColor: 'gray',
					backgroundColor: 'white',
					padding: 10,
					borderRadius: 10,
					marginTop: 20,
			}}>
			<Text style={{ paddingLeft: 10 }}>İl</Text>
			{this.state.addressgetcitydata && (
				<RNPickerSelect
				disabled={this.state.addresschangeable ? true : false}
				style={{
					...pickerSelectStyles,
				}}
				placeholder={{
					label: 'İl seçiniz',
						value: null,
				}}
				items={this.state.addressgetcitydata}
				onValueChange={value => {
					if (this.state.addresschangeable === false) return;
					this.setState({
						favColor: value,
						addressgettowndata: null,
					});
					this.pulltowndata(value);
				}}
				onUpArrow={() => {}}
				onDownArrow={() => {}}
				value={this.state.favColor}
				/>
			)}

			{this.state.addressgettowndata && (
				<View>
				<Text style={{ paddingLeft: 10 }}>İlçe</Text>

				<RNPickerSelect
				disabled={this.state.addresschangeable ? true : false}
				style={{
					...pickerSelectStyles,
				}}
				placeholder={{
					label: 'İlçe seçiniz',
						value: null,
				}}
				items={this.state.addressgettowndata}
				onValueChange={value => {
					if (this.state.addresschangeable === false) return;

					this.setState({
						favColor2: value,
					});
				}}
				onUpArrow={() => {}}
				onDownArrow={() => {}}
				value={this.state.favColor2}
				/>
				</View>
			)}
			</View>
			<View
			style={{
				borderColor: 'gray',
					backgroundColor: 'white',
					padding: 10,
					borderRadius: 5,
					marginTop: 20,
			}}>
			<Text style={{ paddingLeft: 10 }}>Fatura Tipi</Text>

			<View style={{ flexDirection: 'row' }}>
			<TouchableOpacity
			activeOpacity={1}
			onPressIn={() =>
				this.setState({ kurumsal: false, bireysel: true })
			}
			style={{
				backgroundColor: 'black',
					padding: 5,
					margin: 4,
					borderWidth: 0.5,
					borderColor: 'white',
					borderRadius: 4,
			}}>
			<Text style={{ color: 'white' }}>Bireysel</Text>
			</TouchableOpacity>
			<TouchableOpacity
			activeOpacity={1}
			onPressIn={() =>
				this.setState({ kurumsal: true, bireysel: false })
			}
			style={{
				backgroundColor: 'black',
					padding: 5,
					margin: 4,
					borderWidth: 0.5,
					borderColor: 'white',
					borderRadius: 4,
			}}>
			<Text style={{ color: 'white' }}>Kurumsal</Text>
			</TouchableOpacity>
			</View>

			{this.state.bireysel && (
				<View>
				<Text style={{ paddingLeft: 10 }}>TC Kimlik No</Text>
				<TextInput
				underlineColorAndroid="rgba(0,0,0,0)"
				keyboardType="number-pad"
				secureTextEntry={false}
				value={this.state.tcno}
				style={{
					fontSize: 16,
						paddingTop: 13,
						paddingHorizontal: 10,
						paddingBottom: 12,
						borderWidth: 1,
						borderColor: '#f0f0f0',
						borderRadius: 4,
						backgroundColor: '#f0f0f0',
						color: 'black',
				}}
				onChangeText={tcno => this.setState({ tcno })}
				/>
				</View>
			)}
			{this.state.kurumsal && (
				<View>
				<Text style={{ paddingLeft: 10 }}>Firma Adı</Text>
				<TextInput
				underlineColorAndroid="rgba(0,0,0,0)"
				value={this.state.firmaadi}
				secureTextEntry={false}
				style={{
					fontSize: 16,
						paddingTop: 13,
						paddingHorizontal: 10,
						paddingBottom: 12,
						borderWidth: 1,
						borderColor: '#f0f0f0',
						borderRadius: 4,
						backgroundColor: '#f0f0f0',
						color: 'black',
				}}
				onChangeText={firmaadi => this.setState({ firmaadi })}
				/>
				<Text style={{ paddingLeft: 10 }}>Vergi Dairesi</Text>
				<TextInput
				underlineColorAndroid="rgba(0,0,0,0)"
				value={this.state.vergidairesi}
				secureTextEntry={false}
				style={{
					fontSize: 16,
						paddingTop: 13,
						paddingHorizontal: 10,
						paddingBottom: 12,
						borderWidth: 1,
						borderColor: '#f0f0f0',
						borderRadius: 4,
						backgroundColor: '#f0f0f0',
						color: 'black',
				}}
				onChangeText={vergidairesi =>
					this.setState({ vergidairesi })
				}
				/>

				<Text style={{ paddingLeft: 10 }}>Vergi No</Text>
				<TextInput
				underlineColorAndroid="rgba(0,0,0,0)"
				keyboardType="number-pad"
				value={this.state.vergino}
				secureTextEntry={false}
				style={{
					fontSize: 16,
						paddingTop: 13,
						paddingHorizontal: 10,
						paddingBottom: 12,
						borderWidth: 1,
						borderColor: '#f0f0f0',
						borderRadius: 4,
						backgroundColor: '#f0f0f0',
						color: 'black',
				}}
				onChangeText={vergino => this.setState({ vergino })}
				/>
				</View>
			)}

			<View>
			<View style={{ height: 200 }} />
			</View>

			<View style={{ height: 200 }} />
			</View>
			</ScrollView>

			{this.state.loading && (
				<View
				style={{
					width: 50,
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: Dimensions.get('window').height / 2 - 25,
						marginLeft: Dimensions.get('window').width / 2 - 25,
						position: 'absolute',
						zIndex: 599,
						height: 50,
						borderRadius: 10,
						backgroundColor: '#02adef',
						opacity: 0.9,
						flexDirection: 'column',
				}}>
				<ActivityIndicator
				size="small"
				color="white"
				style={{ zIndex: 99 }}
				/>
				</View>
			)}
			</View>
			</View>
		);
	}
}


class SifreScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};
	dorecover(){


		fetch('https://www.firsatlarkulubu.com/oauth/api/customer/password-recovery', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

			body: 
			'Username='+this.state.username ,



		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				//  this.setState({ loading: false,errormessage:JSON.stringify(response.ResultMessage) });
				//  alert(JSON.stringify(response.ResultMessage))
				this.dropdown.alertWithType('info', 'Bilgi',response.ResultMessage);


			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(genelhata);
				this.setState({ loading: false });
			});



	}

	render(){
		return(
			<View style={{backgroundColor:'black',flex:1,


			}}>
			<View style={styles.container}>
			<Image 
			resizeMode={Platform.OS=='ios'?"repeat":null}	    

			source={require('./bg.jpg')} style={{position:'absolute',top:0,left:0,zIndex:0,opacity:.08}}
			/>
			<View style={{height:10,width:10}}/>
			<ScrollView>
			<View>
			<Text style={material.title,{color:'white',fontSize:20,marginBottom:10,fontWeight:'800',textAlign:'center',marginBottom:20}}>Fırsatlar Kulübü</Text>
			<Text style={material.title,{color:'white',fontSize:14,marginBottom:10,fontWeight:'100',textAlign:'center',marginBottom:20}}>Şifre Kurtarma</Text>
			{this.state.errormessage &&
				<Text style={{color:'red'}}>{this.state.errormessage}</Text>
			}

			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			style={{height: 40,width:Dimensions.get('window').width/1.2,color:'white',borderRadius:3,borderBottomWidth:.5,borderBottomColor:'white',paddingLeft:10,marginBottom:10}} placeholder="Kullanıcı adınızı giriniz"
			onChangeText={(username) => this.setState({username})}
			/>


			</View>
			</ScrollView>

			<TouchableOpacity onPress={()=>this.dorecover()} style={{ opacity:.8,width:Dimensions.get('window').width/1.2,borderWidth:2,borderColor:'white',backgroundColor:'transparent',alignItems:'center',justifyContent:'center'}}>

			<Text style={{color:'white',margin:15}}>Şifremi Kurtar</Text>

			</TouchableOpacity>

			<Text style={{color:'white',textAlign:'right',marginTop:10,marginBottom:10}} onPress={()=>this.props.navigation.navigate('Home')}>Hesabınız var mı?<Text style={{color:'yellow'}}> Giriş Yapın</Text></Text>

			</View>
			<DropdownAlert ref={ref => this.dropdown = ref} style={{height:250}} />

			</View>



		)

	}
}



var PickerItemIOS = PickerIOS.Item;

var CAR_MAKES_AND_MODELS = {
	amc: {
		name: 'AMC',
		models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
	},
	alfa: {
		name: 'Alfa-Romeo',
		models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
	},
	aston: {
		name: 'Aston Martin',
		models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
	},
	audi: {
		name: 'Audi',
		models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
	},
	austin: {
		name: 'Austin',
		models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
	},
	borgward: {
		name: 'Borgward',
		models: ['Hansa', 'Isabella', 'P100'],
	},
	buick: {
		name: 'Buick',
		models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
			'Roadmaster', 'Skylark'],
	},
	cadillac: {
		name: 'Cadillac',
		models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
	},
	chevrolet: {
		name: 'Chevrolet',
		models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
			'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
	},
};




class OdemeScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			SKT:[],
			CVC:[],
			karthavale:'kart',

			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};



	confirmpayment(){
		this.setState({ loading: true });

		fetch(
			'https://www.firsatlarkulubu.com/oauth/api/checkout/confirm-order/' ,        
			{
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + this.props.navigation.state.params.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},

				//	body: 'CategoryId='+this.state.ddd[0].Id+'&Keywords=&OrderBy=&BrandName=&PriceMin=0&PriceMax=1000&P1=0&P2=100',
			}
		)
			.then(response => {
				const statusCode = response.status;
				// alert(statusCode)
				return response.json();
			})
			.then(response => {
				//	alert(JSON.stringify(response.ResultMessage))

				this.setState({ loading: false,siparisno: response.ResultMessage});
			})
			.catch(error => {
				//this.props.navigation.navigate('Home')
				// alert(error);
			});




	}
	gateway(){
		var PREPARE
		if(typeof this.state.KARTNO == 'undefined' || typeof this.state.SKT == 'undefined' || typeof this.state.CVC == 'undefined'  ){
			return

			//alert('Kart bilgilerinizi kontrol ediniz / DEMO BİLGİLER KULLANILACAK \N 4508034508034509 12/18 000');

			this.setState({KARTNO:'4508 0345 0803 4509',CVC:'000',SKT:'12/18'},function(){

				PREPARE = 'OrderId='+this.state.siparisno+"&InstallmentId=00000000-0000-0000-0000-000000000000&SelectedPaymentMethod=0&CardNumber="+this.state.KARTNO.replace(" ","")+"&Month="+this.state.SKT.substring(0,2)+"&Year=20"+this.state.SKT.substring(3,5)+"&SecureCode="+this.state.CVC+"&CardType=Visa"

				this.setState({ loading: true });
				fetch(
					'https://www.firsatlarkulubu.com/oauth/api/checkout/gateway/' ,        
					{
						method: 'POST',
						headers: {
							Authorization: 'Bearer ' + this.props.navigation.state.params.token,
							'Content-Type': 'application/x-www-form-urlencoded',
						},


						body: PREPARE
					}
				)
					.then(response => {
						const statusCode = response.status;
						// alert(statusCode)
						return response.json();
					})
					.then(response => {
						//	alert(JSON.stringify(response))

						this.setState({ loading: true,bankurl:response.ResultMessage});
					})
					.catch(error => {
						//this.props.navigation.navigate('Home')
						// alert(error);
					});

			})

		}
		else{
			PREPARE = 'OrderId='+this.state.siparisno+"&InstallmentId=00000000-0000-0000-0000-000000000000&SelectedPaymentMethod=0&CardNumber="+this.state.KARTNO.replace(" ","")+"&Month="+this.state.SKT.substring(0,2)+"&Year=20"+this.state.SKT.substring(3,5)+"&SecureCode="+this.state.CVC+"&CardType=Visa"
			this.setState({ loading: true });
			fetch(
				'https://www.firsatlarkulubu.com/oauth/api/checkout/gateway/' ,        
				{
					method: 'POST',
					headers: {
						Authorization: 'Bearer ' + this.props.navigation.state.params.token,
						'Content-Type': 'application/x-www-form-urlencoded',
					},


					body: PREPARE
				}
			)
				.then(response => {
					const statusCode = response.status;
					// alert(statusCode)
					return response.json();
				})
				.then(response => {
					//	alert(JSON.stringify(response))

					this.setState({ loading: true,bankurl:response.ResultMessage,});
				})
				.catch(error => {
					//this.props.navigation.navigate('Home')
					// alert(error);
				});


		}

		//	alert('OrderId='+this.state.siparisno+"&InstallmentId=00000000-0000-0000-0000-000000000000&SelectedPaymentMethod=0&CardNumber="+this.state.KARTNO.replace(/ /g,'')+"&Month="+this.state.SKT.substring(0,2)+"&Year=20"+this.state.SKT.substring(3,5)+"&SecureCode="+this.state.CVC+"&CardType=Visa")







	}

	completepayment(){
		//alert(this.state.siparisno)
		this.setState({ loading: true });

		fetch(
			'https://www.firsatlarkulubu.com/oauth/api/checkout/complete-order/' ,        
			{
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + this.props.navigation.state.params.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},


				body: 'OrderId='+this.state.siparisno+"&IsPaymentSuccess=true"
			}
		)
			.then(response => {
				const statusCode = response.status;
				// alert(statusCode)
				return response.json();
			})
			.then(response => {
				alert(JSON.stringify(response))

				this.setState({ loading: false,siparisno: response.ResultMessage});
				this.props.navigation.navigate('SiparisBasarili',{token:this.props.navigation.state.params.token,urun:this.state.siparisno})
			})
			.catch(error => {
				//this.props.navigation.navigate('Home')
				// alert(error);
			});








	}


	componentDidMount(){

		this.confirmpayment()

		this.customeraddress()


	}
	customeraddress(){
		this.setState({ loading: true });

		fetch(
			'https://www.firsatlarkulubu.com/oauth/api/customeraddress/list/' ,        
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + this.props.navigation.state.params.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},


				//	body: 'OrderId='+this.state.siparisno+"&InstallmentId=00000000-0000-0000-0000-000000000000&SelectedPaymentMethod=0&CodeList=&IsPaymentSuccess=1"
			}
		)
			.then(response => {
				const statusCode = response.status;
				// alert(statusCode)
				return response.json();
			})
			.then(response => {
				//	alert(JSON.stringify(response))

				this.setState({ loading: false,adres: response});
			})
			.catch(error => {
				//this.props.navigation.navigate('Home')
				// alert(error);
			});





	}
	handleMessage(message) {
		alert(message.nativeEvent.data);
	}
	_bindFunctions() {
		this._onHookMessage = this._onHookMessage.bind(this);
	}

	_onHookMessage(msg) {
		alert(`msg incoming [${msg.length}] -> ${msg}`);
	}

	_onMessage(data) {
		//	return
		//alert(data);
		if (data == 'OK') {
			this.setState({ bankurl: false,loading:false });
			// this.completeorderaftergateway(this.state.orderid, true);
			this.completepayment()
		} else {
			alert(data);
			this.setState({ bankurl: false,loading:false });
			//  this.completeorderaftergateway(this.state.orderid, false);
		}
	}
	injectjs() {
		let jsCode = `
		setInterval(function() {
			alert(document.getElementById('result').html());
		}, 1500)`;

		return jsCode;
	}


	render(){
		const jsCode =
			"setInterval(function() {window.postMessage(document.getElementById('result').innerHTML);}, 500)";

		return(<View style={{height:Dimensions.get('window').height-StatusBar.currentHeight,backgroundColor:'white'}}>
			<HHeader baslik="Ödeme" title={this} arkaplan={renk}/>



			{this.state.loading &&false &&<View style={{backgroundColor:'black',opacity:.7,width:Dimensions.get('window').width,height:Dimensions.get('window').height,alignItems:'center',justifyContent:'center',zIndex:100,position:'absolute'}}>
				<ActivityIndicator size="small" color="orange" />
				<Text style={{color:'white'}}>bekleyiniz...</Text>
				</View>
			}

			{this.state.bankurl &&
					<WebView
				onError={()=>alert('Bağlatınızı kontrol edin.')}
				javaScriptEnabled={true}
				injectedJavaScript={jsCode}
				scalesPageToFit={false}
				onMessage={event => this._onMessage(event.nativeEvent.data)}

				source={{uri: this.state.bankurl}}
				style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width}}
					/>
			}
			{!this.state.bankurl &&


					<ScrollView>
					<View  style={{padding:10}}>
					<View style={{borderRadius:5,padding:5,width:Dimensions.get('window').width/2}}>
					<Text style={{color:'red',textAlign:'left',marginLeft:10}}>1) Adres Bilgileri</Text>
			</View>
			<View style={{flexDirection:'row',alignItems:'center',margin:3}}>
			{this.state.adres &&	
				<Text style={{margin:10,color:'blue',textAlign:'left'}} onPress={()=>this.props.navigation.navigate('AdresDegistir',{token:this.props.navigation.state.params.token,secilenadres:this.state.adres[0].Id})}>{this.state.adres[0].Name} </Text>
			}
			</View>
			<View style={{borderRadius:5,padding:5,width:Dimensions.get('window').width/2}}>
			<Text style={{color:'red',textAlign:'left',marginLeft:10}}>2) Kart Bilgileri</Text>
	</View>
	{false&&
		<View style={{flexDirection:'row',alignItems:'center',margin:3,justifyContent:'center'}}>
		<Text onPress={()=>this.setState({karthavale:'kart',kartsecildi:false})} style={{margin:10,color:'blue',textDecorationLine:this.state.karthavale=='kart'?'underline':'none', fontWeight:this.state.karthavale=='kart'?'800':'100'}}>Kredi/Banka Kartı {this.state.secilenkart&&<Text>({this.state.secilenkart})</Text>}</Text>


		</View>
	}
{this.state.karthavale == 'kart' && 
		<View>



		<View style={{flexDirection:'row'}}>
		<TextInput placeholderTextColor="#333" underlineColorAndroid="rgba(0,0,0,0)"  keyboardType="number-pad"

	style={{height: 40,width:Dimensions.get('window').width/2,margin:5,borderColor:this.state.karterror?'red':'blue',borderBottomWidth:.5,padding:2,color:this.state.karterror?'red':'black'}}
	ref="kartno"
	onChangeText={(KARTNO) => {
		if(KARTNO.length == 19){
			Keyboard.dismiss
			this.refs['kartno'].blur()
			this.refs['skt'].focus()

		}

		if(KARTNO.length>19){
			this.setState({karterror:true})

		}
		else{
			this.setState({karterror:false})

		}
		if(KARTNO.length==4 ||KARTNO.length==9 || KARTNO.length==14 ){
			this.setState({KARTNO:KARTNO+" "})

		}else{
			this.setState({KARTNO})
		}


	}}
	value={this.state.KARTNO}
	placeholder="Kart Numarası"
		/>
		<TextInput placeholderTextColor="#333" underlineColorAndroid="rgba(0,0,0,0)"  keyboardType="number-pad"
	style={{height: 40,width:Dimensions.get('window').width/6,margin:5,borderColor:this.state.skterror?'red':'blue',borderBottomWidth:.5,padding:2,color:this.state.skterror?'red':'black'}}
	ref="skt"

	onChangeText={(SKT) => {
		if(SKT.length == 5){
			Keyboard.dismiss
			this.refs['skt'].blur()
			this.refs['cvc'].focus()

		}


		//	alert(SKT.length)
		if(SKT.length>5){
			this.setState({skterror:true})

		}
		else{
			this.setState({skterror:false})

		}

		if(SKT.length==2){
			this.setState({SKT:SKT+"/"})

		}else{
			this.setState({SKT})
		}

	}}
	value={this.state.SKT}
	placeholder="SKT"
		/>
		<TextInput placeholderTextColor="#333" underlineColorAndroid="rgba(0,0,0,0)"  keyboardType="number-pad"
	style={{height: 40,width:Dimensions.get('window').width/6,margin:5,borderColor:this.state.cvcerror?'red':'blue',borderBottomWidth:.5,padding:2,
			color:this.state.cvcerror?'red':'black'}}
	ref="cvc"

	onChangeText={(CVC) => {
		if(CVC.length == 3){
			Keyboard.dismiss
			this.refs['cvc'].blur()
		}

		if(CVC.length>3){
			this.setState({cvcerror:true})

		}
		else{
			this.setState({cvcerror:false})

		}
		this.setState({CVC})


	}}
	value={this.state.CVC}
	placeholder="CVC"
		/>


		</View>
		</View>
}

{this.state.karthavale == 'havale' && 
		<View>
		<Text  style={{color:'gray',textAlign:'left',marginLeft:10}}>Banka Seçimi</Text>

		</View>
}
	<View style={{borderRadius:5,padding:5,width:Dimensions.get('window').width/2}}>

	</View>


	</View>
	<View style={{alignItems:'center',justifyContent:'center'}}>
	<TouchableOpacity style={{margin:10,justifyContent:'flex-end'}} onPress={()=>{
		//	this.completepayment()
		this.gateway()
	}}>
	<View style={{width:150,height:50,backgroundColor: '#222',borderColor:'#fdfdfd',borderWidth:.4,alignItems:'center',justifyContent:'center'}}>
	<Text style={{fontWeight:'100',color:'white'}}>Ödemeyi Tamamla</Text>
	<Text style={{fontWeight:'100',color:'white',fontSize:10}}>3D Secure kullanılacaktır.</Text>

	</View>

	</TouchableOpacity>
	</View>

	</ScrollView>

}

{this.state.karthavale=='kart'&& !this.state.kartsecildi&& false &&
		<View style={{position:'absolute',bottom:0,width:Dimensions.get('window').width,backgroundColor:'white',opacity:.9}}>

		<Text style={{textAlign:'center',fontWeight:'100',color:'gray'}}>Taksit seçeneklerini görmek için lütfen Kart Seçiniz</Text>

		<PickerIOS
	style={{zIndex:100,width:Dimensions.get('window').width}}
	selectedValue={this.state.carMake}
	onValueChange={(carMake) => this.setState({kartsecildi:true,secilenkart:carMake})}>
		{Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
			<PickerItemIOS
			key={carMake}
			value={carMake}
			label={CAR_MAKES_AND_MODELS[carMake].name}
			/>
		)
		)}
		</PickerIOS>
		</View>
}




	</View>

)

}
}

class UrunScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};
	componentDidMount(){
		//alert(this.props.navigation.state.params.token)
		//alert(this.props.navigation.state.params.urun)

		this.setState({ loading: true });
		//    this.productcount();
		//	  this.categorylist()
		fetch(
			'https://www.firsatlarkulubu.com/oauth/api/product/detail/' +
			this.props.navigation.state.params.urun,
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + this.props.navigation.state.params.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},

				//	body: 'CategoryId='+this.state.ddd[0].Id+'&Keywords=&OrderBy=&BrandName=&PriceMin=0&PriceMax=1000&P1=0&P2=100',
			}
		)
			.then(response => {
				const statusCode = response.status;
				// alert(statusCode)
				return response.json();
			})
			.then(response => {
				//alert(this.state.ddd[0].Id),
				//	alert(JSON.stringify(response))
				//alert()
				this.setState({ product: response });
				var fruits = [];
				var desc
				for (var i = 0; i < response.Description.length; i++) {
				desc+=response.Description[i]+' '

				}
				//	this.setState({ ddd: fruits })
				this.setState({ loading: false,desc:desc, });
			})
			.catch(error => {
				//this.props.navigation.navigate('Home')
				// alert(error);
			});




	}
	addtocart(){
		const { navigation } = this.props;
		this.setState({ loading: true });
		//    this.productcount();
		//	  this.categorylist()
		fetch(
			'https://www.firsatlarkulubu.com/oauth/api/shoppingcart/add-item/' +
			this.props.navigation.state.params.urun,
			{
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + this.props.navigation.state.params.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},

				//	body: 'CategoryId='+this.state.ddd[0].Id+'&Keywords=&OrderBy=&BrandName=&PriceMin=0&PriceMax=1000&P1=0&P2=100',
			}
		)
			.then(response => {
				const statusCode = response.status;
				// alert(statusCode)
				return response.json();
			})
			.then(response => {
				this.setState({ loading: false });
				this.props.navigation.navigate('Sepet',{token:this.props.navigation.state.params.token,urun: this.props.navigation.state.params.urun})

			})
			.catch(error => {
				//this.props.navigation.navigate('Home')
				// alert(error);
			});


	}
	joincampaign(){

		this.setState({ loading: true });
		//    this.productcount();
		//	  this.categorylist()
		fetch(
			'https://www.firsatlarkulubu.com/oauth/api/campaign/participation/'+ this.props.navigation.state.params.urun,
			{
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + this.props.navigation.state.params.token,
					'Content-Type': 'application/x-www-form-urlencoded',
				},

				body: 'ProductId='+this.props.navigation.state.params.urun,
			}
		)
			.then(response => {
				const statusCode = response.status;
				// alert(statusCode)
				return response.json();
			})
			.then(response => {
				//alert(this.state.ddd[0].Id),
				//	alert(JSON.stringify(response))
if (response.ResultCode=='Error'){
				this.dropdown.alertWithType('error', 'Hata',response.ResultMessage);

}else{
				this.dropdown.alertWithType('success', 'Bilgi',response.ResultMessage);

}

				//alert()
				// this.setState({ product: response });
				var fruits = [];
				for (var i = 0; i < response.length; i++) {
					//	fruits.push({Idd:response[i].Id , Id:response[i].Image, Name:response[i].Name, Price:response[i].Price, Brand:response[i].Brand}
					//	)
				}
				//	this.setState({ ddd: fruits })
				this.setState({ loading: false });
			})
			.catch(error => {
				//this.props.navigation.navigate('Home')
				alert(error);
				this.setState({ loading: false });

			});


	}

	render(){
	

		return(<View
			style={{
				flexDirection: 'column',
					backgroundColor: 'white',
					width: Dimensions.get('window').width,
					height: Dimensions.get('window').height-StatusBar.currentHeight,
			}}>
<StatusBar
			backgroundColor={'black'}
			translucent={false}
			barStyle="light-content"
			/>
			{this.state.loading &&true &&<View style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height,alignItems:'center',justifyContent:'center',zIndex:100,position:'absolute'}}>
				<ActivityIndicator size="small" color="black" />
				<Text style={{color:'black'}}>bekleyiniz...</Text>
				</View>
			}

			<ScrollView
			onScrollBeginDrag={() => this.setState({ setorange: true })}
			style={{
				width: Dimensions.get('window').width,
					height: Dimensions.get('window').height,
			}}>
		<View >
			{this.state.product &&

				<View style={{alignItems:'center'}}>
				<View
				style={{
					width: Dimensions.get('window').width,backgroundColor:'black',flexDirection:'row'		
				}}>
					<TouchableOpacity
			style={{ marginTop: Platform.OS=='ios'?30:5, width: 30, height: 40,marginLeft:10 }}
			onPressIn={() => this.props.navigation.pop()}>
			<Icon2 name="arrow-left" size={20} color="gray" />
			</TouchableOpacity>

				{this.state.product &&
					<Text
					style={[
						iOSUIKit.bodyEmphasized,
						{ marginTop: 0, fontSize: 14, textAlign: 'center',fontWeight:'100' ,color:'white' ,marginTop: Platform.OS=='ios'?30:5,},
					]}>
					{this.state.product.Name} {this.state.product.Brand} {this.state.product.Model}</Text>
				}

				</View>



				<Lightbox
				swipeToDismiss={true}
				underlayColor="white"
				backgroundColor="white"
				renderHeader={() => {
					return (
						<Text style={{ padding: 5, textAlign: 'center' }}>
						kapatmak için kaydırın
						</Text>
					);
				}}
				renderContent={() => {
					return (
						<Image defaultSource={require('./noimage.jpg')} 
						style={{ flex: 1 }}
						resizeMode="contain"
						source={{ uri: 'https:'+this.state.product.Image }}
						/>
					);
				}}>

				<Image defaultSource={require('./noimage.jpg')} 
				source={{ uri: 'https:'+this.state.product.Image }}

				style={{ width: 200, height: 200, margin: 10 }}
				resizeMode={'cover'}
				/>
				</Lightbox>
				<View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#dddddd50',width:Dimensions.get('window').width,justifyContent:'center'}}>
				{this.state.product && !this.state.product.IsCampaign &&
					<Text
					style={[
						iOSUIKit.bodyEmphasized,
						{ marginTop: 0, fontSize: 20, textAlign: 'center',fontWeight:'800',marginRight:20 },
					]}>
					{this.state.product.Price} TL</Text>
				}

				<TouchableOpacity onPress={()=>{
					if(this.state.product.IsCampaign){
						this.joincampaign()
					}else{
						this.addtocart()

					}


				}}>
				<View style={{width:150,height:50,backgroundColor:this.state.product.IsCampaign ? '#555':'orange',borderColor:'#fdfdfd',borderWidth:.4,alignItems:'center',justifyContent:'center'}}>
				{this.state.product.IsCampaign && 
					<Text style={{fontWeight:'100',color:'white'}}>Kampanyaya katıl</Text>
				}
				{!this.state.product.IsCampaign && 
						<Text style={{fontWeight:'100',color:'white'}}>Sepete Ekle</Text>
				}

				</View>

				</TouchableOpacity>

				</View>


				<Text style={{fontWeight:'100',textAlign:'left',width:Dimensions.get('window').width,padding:10}}>
				Ürün Özellikleri:{'\n'}
				</Text>
				<WebView
				source={{html:'<html><body><font style="font-size:40px">'+this.state.desc+'</font></body></html>' }}
style={{height:250,width:Dimensions.get('window').width}}
				/>

				</View>

			}

			<DropdownAlert ref={ref => this.dropdown = ref} />

			</View>

			</ScrollView>

			</View>


		)

	}
}

class Bottomnav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blacked: false,
		};
	}

	static navigationOptions = {
		title: 'Hosgeldiniz',
		header: null,
		//headerStyle: { paddingTop: 0,backgroundColor:'yellow' }
		//
		gesturesEnabled: false,
	};



	render(){
		var titleConfig = {
			title: this.props.title,
			token:this.props.token
		};

		return(

			<View style={{position:'absolute',paddingLeft:30,zIndex:100,paddingRight:30,paddingTop:5,bottom:0,height:60,backgroundColor:Platform.OS=='ios'?'transparent':'white',width:Dimensions.get('window').width,justifyContent:'space-between',flexDirection:'row'}}>
			{Platform.OS == 'ios' &&

				<BlurView
				style={{width:Dimensions.get('window').width,position:'absolute',height:60}}
				viewRef={this.state.viewRef}
				blurType="light"
				blurAmount={10}
				/>
			}
			<View style={{alignItems:'center',justifyContent:'center'}}>
			<Icon2 name="home" size={21} color="#000" style={{marginBottom:1}}
			onPress={()=>

				this.props.title.props.navigation.navigate('Home', {

					token: this.props.token,
				})
			}

			/>

			<Text style={{fontWeight:'100',fontSize:12}}>Ana Sayfa</Text>
			</View>
			<View style={{alignItems:'center',justifyContent:'center'}}>
			<Icon2 name="magnifier" size={21} color="#888" style={{marginBottom:1}} onPress={()=>

				this.props.title.props.navigation.navigate('Arama', {

					token: this.props.token,
					searchkey: this.props.title.state.searchkey,
				})
			}/>

			<Text style={{fontWeight:'100',fontSize:12}}>Arama</Text>
			</View>
			<View style={{alignItems:'center',justifyContent:'center'}}>
			<Icon2 name="trophy" size={23} color="#888" style={{marginBottom:1}}
			onPress={()=>

				this.props.title.props.navigation.navigate('Firsatlar', {
					token: this.props.token,
					searchkey: this.props.title.state.searchkey,
				})
			}
			/>

			<Text style={{fontWeight:'100',fontSize:12}}>Fırsatlar</Text>
			</View>

			{Platform.OS=='android' &&
				<View style={{alignItems:'center',justifyContent:'center'}}>
				<Icon2 name="handbag" size={21} color="#888" style={{marginBottom:1}}
				onPress={()=>

					this.props.navigation.navigate('Sepet', {
						token: this.state.token,
						searchkey: this.state.searchkey,
					})
				}


				/>
				<Text style={{fontWeight:'100',fontSize:12}}>Sepetim</Text>
				</View>


			}



			<View style={{alignItems:'center',justifyContent:'center'}}>
			<Icon2 name="options" size={21} color="#888" style={{marginBottom:1}}
			onPress={()=>

				this.props.title.props.navigation.navigate('Diger', {
					token: this.props.token,

					searchkey: this.props.title.state.searchkey,
				})
			}


			/>

			<Text style={{fontWeight:'100',fontSize:12}}>Diğer</Text>
			</View>



			</View>

		)


	}

}

class HHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			blacked: false,
		};
	}

	static navigationOptions = {
		title: 'Hosgeldiniz',
		header: null,
		//headerStyle: { paddingTop: 0,backgroundColor:'yellow' }
		//
		gesturesEnabled: false,
	};

	render() {
		var titleConfig = {
			title: this.props.title,
			baslik: this.props.baslik,
			arkaplan:this.props.arkaplan
		};

		return (
			<View
			elevation={this.state.blacked == true ? 0 : 0}
			style={{
				zIndex: this.state.blacked == true ? 0 : 0,
					backgroundColor: this.props.arkaplan ? this.props.arkaplan : 'white',
					height: Platform.OS === 'ios' ? 70 : 50,
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					paddingTop: Platform.OS === 'ios' ? 30 : 5,
					opacity: this.state.blacked == true ? 0.99 : 1,
					borderBottomWidth: 0.5,
					borderBottomColor: '#ccc',
			}}>
			<Image 

			resizeMode={Platform.OS=='ios'?"repeat":null}	    
			source={require('./bg.jpg')} style={{position:'absolute',top:0,left:0,zIndex:0,opacity:.08}}
			/>
{false&&
			<TouchableOpacity
			style={
				{
					// position: 'absolute',
				}
			}
			onPressIn={() => {drawerContent=null;this.props.title.props.navigation.pop()}}>

			<Icon2
			style={{paddingLeft:10,}}
			name="arrow-left"
			size={20}
			color={ this.props.arkaplan ? 'white' : 'gray'}
			/>
			</TouchableOpacity>
			}
			{this.props.baslik &&
				<Text style={{fontSize:18,fontWeight:'100',color: this.props.arkaplan?'white':'black'}}>{this.props.baslik}</Text>
			}
			<View style={{ flexDirection: 'row',width:0 }} />

			</View>

		);
	}
}

class SearchScreenx extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			pager: 0,
			searchp1: '',
			searchp2: '',
			showfilter: false,
			searchstarted: false,
			grid:false
		};
	}
	static navigationOptions = {
		title: 'Arama',
		header: null,
		tabBarIcon: ({ focused,tintColor }) => (
			focused ? 	<Icon2 name="magnifier" size={21} color="purple" style={{marginBottom:1}} />
			:				<Icon2 name="magnifier" size={21} color="#ccc" style={{marginBottom:1}} />


			 
		  ),
	};

	componentDidMount() {
		var self =this
		Realm.open({ schema: [uyeSchema,notificationSchema], schemaVersion: 5 })
						.then(realm => {
							//alert(JSON.stringify(realm.objects('Uyeler')["0"].token))
							self.setState({token:realm.objects('Uyeler')["0"].token},function(){
								//self.showcart()
							});
						})
		this.setState({
		//	token: this.props.navigation.state.params.token,
			searchkey: '' ,
			setmin: 0,
			setmax: '' ,
		});
		if (this.state.searchtext == '') {
			this.setState({ searchresult: false, loading: false });
		}
		/*
		if (false) {
			this.setState(
				{
					searchstarted: true,
					searchtext: this.props.navigation.state.params.searchkey,
					loading: true,
					pager: 0,
					searchresult: false,
				},
				function() {
					this.searchaction(
						this.props.navigation.state.params.searchkey,
						0,
						null
					);
				}
			);
		}
		if (false) {
			//  alert(
			//     parseInt(this.props.navigation.state.params.setmax.replace('.','').replace(',','.'))

			//)
			this.setState(
				{
					searchstarted: true,
					searchtext: '',
					loading: true,
					pager: 0,
					searchresult: false,
				},
				function() {
					this.searchaction(
						'',
						0,
						parseInt(this.props.navigation.state.params.setmax.replace('.','').replace(',','.'))
					);
				}
			);
		}
		*/
	}

	workerforpager(a, kw) {
		// alert('.çö')
		this.setState({ loading: true, pager: a + 1 });
		//alert(this.state.pager)
		var p1 = 20 * a;
		var p2 = 20 * (a + 1);
		fetch('https://www.firsatlarkulubu.com/oauth/api/product/list/', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + this.state.token,
				Accept: 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded',
			},

			body:
			'Keywords=' +
			kw +
			'&OrderBy=&BrandName=&PriceMin=' +
			this.state.searchp1 +
			'&PriceMax=' +
			this.state.searchp2 +
			'&P1=' +
			p1 +
			'&P2=' +
			p2,
		})
			.then(response => {
				const statusCode = response.status;
				return response.json();
			})
			.then(response => {
				//alert(this.state.ddd[0].Id),
				//	alert(JSON.stringify(response))
				//alert('asdasdadsad')

				var fruits = this.state.searchresult;
				// alert(JSON.stringify(response))

				for (var i = 0; i < response.Products.length; i++) {
					fruits.push({
						Id: response.Products[i].Id,
						Image: response.Products[i].Image,
						Name: response.Products[i].Name,
						Price: response.Products[i].Price,
						Brand: response.Products[i].Brand,
						Model: response.Products[i].Model,
					});
				}
				//alert(JSON.stringify(fruits.length))
				this.setState({ searchresult: fruits, loading: false });
			})
			.catch(error => {
				//this.props.navigation.navigate('Home')
				this.setState({ loading: false });

				//alert(error);
			});
	}

	searchaction(text, price1, price2) {
		//alert(JSON.stringify(text))
		if (typeof text === 'undefined') {
			text = '';
		}
		//alert(price1 + ' - ' + price2 )
		if(typeof price2 =='undefined' && typeof price1 == 'undefined' ){
			price1=''
			price2=''
			this.setState({searchp1:price1,searchp2:price2})

		}
		if(price2 && price1==''){
			price1=0
			this.setState({searchp1:price1,searchp2:price2})
		}

		// alert(price1 + ' - ' + price2 )


		this.setState({
			searchtext: text,
			loading: true,
			pager: 0,
			searchresult: false,
		});
		if (text || 1 == 1) {
			fetch('https://www.firsatlarkulubu.com/oauth/api/product/list/', {
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + this.state.token,
					Accept: 'application/x-www-form-urlencoded',
					'Content-Type': 'application/x-www-form-urlencoded',
				},

				body:
				'Keywords=' +
				text +
				'&P1=0&P2=20&PriceMin=' +
				price1  +
				'&PriceMax=' +
				price2 ,
			})
				.then(response => {
					return response.json();
				})
				.then(response => {
					this.setState({ loading: false, searchresult: response.Products });
					// alert(JSON.stringify(response).substr(0,200));
				})
				.catch(error => {
					this.props.navigation.navigate('Home');
					alert(error);
				});
		} else {
			alert('geçersiz anahtar kelime');
			this.setState({ loading: false });
			return;
		}
	}
	render() {
		return (
			<View style={{ height:Platform.OS=='ios'?Dimensions.get('window').height:Dimensions.get('window').height-StatusBar.currentHeight}}>
			<View
			style={{
				backgroundColor: renk,

					height: Platform.OS === 'ios' ? 70 : 50,
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginBottom: 0,
					elevation: 1,
					paddingTop: Platform.OS === 'ios' ? 30 : 0,
					alignItems: 'center',
			}}>{false &&
			<TouchableOpacity
			activeOpacity={1}
			onPressIn={() => {drawerContent=null;this.props.navigation.pop()}}>

			<Icon2 name="arrow-left" size={20} color="white" />
			</TouchableOpacity>
			}
			<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
			underlineColorAndroid="rgba(0,0,0,0)"
			style={{
				borderColor: renk,
					backgroundColor: renk,

					borderWidth: 0.8,
					color: 'white',
					fontWeight: '100',
					width: Dimensions.get('window').width / 2,
					height: Platform.OS == 'ios' ? 30 : 40,
					textAlign: 'center',
					flex: 0.9,
					paddingLeft: 10,
					marginRight: 10,
			}}
			placeholder={'Ürün adı veya kategori giriniz...'}
			onChangeText={searchtext =>
				this.setState({ searchtext: searchtext })
			}
			value={this.state.searchtext}
			/>
			<TouchableOpacity
			style={{
				// flex:.4,
				width: Dimensions.get('window').width / 4,
					height: 34,
					backgroundColor: renk,
					alignItems: 'center',
					justifyContent: 'center',
			}}
			onPressIn={() => {
				this.searchaction(
					this.state.searchtext,
					this.state.searchp1,
					this.state.searchp2
				);
				this.setState({ searchstarted: true });
			}}>
			<View style={{ backgroundColor: renk }}>
			<Text style={{ color: 'white', textAlign: 'center' }}>Ara</Text>
			</View>
			</TouchableOpacity>
			</View>
			<View
			style={{
				backgroundColor: renk,
					marginTop: Platform.OS == 'ios' ? 0 : 0,
					width: Dimensions.get('window').width,
					justifyContent: 'center',
					flexDirection: 'row',
					alignItems: 'center',
			}}>
			{this.state.searchstartedxxx && (
				<TouchableOpacity
				onPressIn={() =>
					this.setState({ searchresult: false, searchtext: false })
				}>
				<Icon2
				name="close"
				style={{ marginRight: 4 }}
				size={20}
				color="red"
				/>
				</TouchableOpacity>
			)}
			</View>
			{true && (
				<View style={{ flexDirection: 'row' }}>
				<View
				style={{
					flexDirection: 'row',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: renk,
				}}>
				<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
				underlineColorAndroid="rgba(0,0,0,0)"
				style={{
					color: 'white',
						fontWeight: '100',
						borderColor: renk,
						borderWidth: 0.8,
						textAlign: 'center',
						width: Dimensions.get('window').width / 3,
						height: Platform.OS == 'ios' ? 30 : 40,
						margin: 5,
						flex: 0.5,
				}}
				placeholder={'Min:0'}
				onChangeText={searchp1 => {
					this.setState({ searchp1: searchp1 });
				}}
				value={this.state.searchp1}
				/>

				<TextInput placeholderTextColor="#FFFFFF" underlineColorAndroid="rgba(0,0,0,0)" 
				underlineColorAndroid="rgba(0,0,0,0)"
				style={{
					color: 'white',
						fontWeight: '100',
						width: Dimensions.get('window').width / 3,
						height: Platform.OS == 'ios' ? 30 : 40,
						flex: 0.5,
						textAlign: 'center',
						margin: 5,
						borderColor: renk,
						borderWidth: 0.8,
				}}
				
				onChangeText={searchp2 => {
					this.setState({ searchp2: searchp2 });
				}}
				placeholder="max"
				value={this.state.searchp2}
				/>

				

				</View>



				</View>
			)}
			{false && (
				<View
				style={{
					justifyContent: 'flex-end',
						alignItems: 'center',
						flexDirection: 'row',
						paddingRight: 10,
				}}>
				<TouchableHighlight
				onPressIn={() => {
					this.setState({ showfilter: true });
				}}>
				<Text style={{ color: 'blue', marginRight: 5 }}>Filtre ekle</Text>
				</TouchableHighlight>
				</View>
			)}
			<View
			style={{
					alignItems: 'center',
					paddingTop: 5,
					flex: 1,
					width: Dimensions.get('window').width,
			}}>
			{!this.state.searchresult && (
				<Icon2
				name="magnifier"
				style={{ margin: 40, opacity: 0.7 }}
				size={130}
				color="#888"
				/>
			)}
			{this.state.searchresult && (
				<View style={{ flex: 1 }}>
				<Text
				style={{
					fontWeight: '800',
						color: 'gray',
						margin: 3,
						textAlign: 'center',
						borderRadius: 2,
				}}>
				Arama Sonuçları
				</Text>




				{this.state.searchresult && this.state.grid &&(
					<View style={{flex:1}}>
					<FlatList
					onEndReachedThreshold={1}
					onEndReached={({ distanceFromEnd }) => {
						// alert(this.state.pager)
						this.workerforpager(
							this.state.pager + 1,
							this.state.searchtext
						);
						//alert('asd')
					}}
					numColumns={2}

					style={{ flex: 1, width: Dimensions.get('window').width }}
					data={this.state.searchresult}
					renderItem={({ item }) => (
						<TouchableOpacity
						style={{ alignItems: 'center',width:Dimensions.get('window').width/2 - 5 }}
						onPress={() => {
							//alert(item.Id);
							this.props.navigation.navigate('ProductDetail', {
								name: item.Id,
								token: this.props.navigation.state.params.token,
							});
						}}>
						<View
						style={{
							flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'left',
						}}>
						<Image defaultSource={require('./noimage.jpg')} 
						style={{
							height: 180,
								width: Dimensions.get('window').width/2 - 5,
						}}
						resizeMode={'contain'}
						source={{ uri: 'https:' + item.Image }}
						/>
						<View
						style={{
								flexDirection: 'column',
								padding: 10,
								justifyContent: 'center',
								textAlign: 'left',
						}}>
						<Text
						numberOfLines={2}
						style={{
							//fontSize: 16,
							fontWeight: 'bold',
								textAlign: 'left',
						}}>
						{item.Brand} {item.Name} {item.Model}
						</Text>
						<Text style={{ fontSize: 12, fontWeight: '100' }}>
						{item.Brand}
						</Text>
						{item.Price > 1 &&
							<Text style={{ fontSize:20, fontWeight: '800' }}>
							{item.Price} TL
							</Text>
						}



						</View>
						</View>
						</TouchableOpacity>
					)}
					/>
					</View>  )}



				{this.state.searchresult && !this.state.grid&& (
					<FlatList
					onEndReachedThreshold={1}
					onEndReached={({ distanceFromEnd }) => {
						// alert(this.state.pager)
						this.workerforpager(
							this.state.pager + 1,
							this.state.searchtext
						);
						//alert('asd')
					}}
					style={{ flex: 1, width: Dimensions.get('window').width }}
					data={this.state.searchresult}
					renderItem={({ item }) => (
						<TouchableOpacity
						style={{ alignItems: 'center' }}
						onPress={() => {
							//alert(item.Id);
							this.props.navigation.navigate('Urun', {
								urun: item.Id,
								token: this.props.navigation.state.params.token,
							});
						}}>
						<View
						style={{margin:10,width:Dimensions.get('window').width-20,
							flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
								backgroundColor: 'white',
						}}>
						<Image defaultSource={require('./noimage.jpg')} 
						style={{
								height: 200,
								width: 300,
						}}
						resizeMode={'contain'}
						source={{ uri: 'https:' + item.Image }}
						/>
						<View
						style={{
								backgroundColor: '#FFFFFF',
								flexDirection: 'column',
								padding: 10,
								justifyContent: 'center',
								textAlign: 'left',
						}}>
						<Text
						style={{
							fontFamily: Platform.OS == 'android' ? 'Roboto-Thin' : null,

								fontSize: 16,
								fontWeight: '800',
								textAlign: 'left',
						}}>
					 {item.Name} {item.Model}
						</Text>
						<Text style={{ fontSize: 12, fontWeight: '100' }}>
						{item.Brand}
						</Text>
						{item.Price > 1 &&
							<Text style={{ fontSize:20, fontWeight: '800' }}>
							{item.Price} TL
							</Text>
						}


						<View
						style={{
							backgroundColor: 'white',
								width: 115,
								height: 25,
								borderRadius: 5,
								alignItems: 'center',
								justifyContent: 'center',
						}}
						/>
						<Text style={{ fontWeight: '200' }} />
						</View>
						</View>
						</TouchableOpacity>
					)}
					/>
				)}
				</View>
			)}
			</View>

			{this.state.loading && (
				<View
				style={{
					width: 50,
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: Dimensions.get('window').height / 2 - 25,
						marginLeft: Dimensions.get('window').width / 2 - 25,
						position: 'absolute',
						zIndex: 599,
						height: 50,
						borderRadius: 10,
						backgroundColor: renk,
						opacity: 0.9,
						flexDirection: 'column',
				}}>
				<ActivityIndicator
				size="small"
				color="white"
				style={{ zIndex: 99 }}
				/>
				</View>
			)}
			</View>
		);
	}
}


class IntroScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			pager: 0,
			searchp1: '',
			searchp2: '',
			showfilter: false,
			searchstarted: false,
			grid:false
		};
	}
	static navigationOptions = {
		title: 'searchscreen',
		header: null,
	};
	componentWillMount(){
		if(true){
			this.props.navigation.navigate('Home')
		}
	}
	componentDidMount(){
		if(Platform.OS=='android'){
			this.props.navigation.navigate('Home')
		}
		Realm.open({ schema: [uyeSchema,notificationSchema], schemaVersion: 5 })
			.then(realm => {
				realm.objects('Uyeler'); //Tüm objeleri geri dönderir.
				// alert(realm.objects('Uyeler').filtered('username="'+this.state.UserName+'"').length)

				if (realm.objects('Uyeler').length < 1) {
				} else {
					// alert(JSON.stringify(realm.objects('Uyeler')[0].username))

					this.setState(
						{
							UserName: realm.objects('Uyeler')[0].username,
							Password: realm.objects('Uyeler')[0].sifre,
						},
						function() {
							this.dologin();
						}
					);
				}

			})
			.catch(error => {
				console.log(error);
			});


	}


	dologin() {
		if(this.state.Password == '' || this.state.UserName == '' || typeof this.state.UserName == undefined ||  typeof this.state.Password == undefined  )return
		this.dropdown.alertWithType('info', 'Bilgi','Giriş yapılıyor...');

		var encodedString='' ;
		//	  var text = 'foo © bar 𝌆 baz';
		//var bytes = utf8.encode(text);
		//var encoded = binaryToBase64(bytes);
		// if(true){
		// this.setState({ loading: true });
		// alert(encodedString),
		//


		this.setState({loading:true})		  
		fetch('https://www.firsatlarkulubu.com/oauth/api/auth', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },

			body: 'UserName=' +
			encodeURIComponent(this.state.UserName) +
			'&Password=' +
			encodeURIComponent(this.state.Password) +
			'&grant_type=password',
		})
			.then(response => {
				return response.json();
			})
			.then(response => {
			//	alert(JSON.stringify(response))

				//this.props.navigation.navigate('Proje', {
				//  UserName: this.state.UserName,
				//  Password: this.state.Password,
				//});
				//
				//  alert(JSON.stringify(response))
				//  alert(response.LoginControl)
				if (response.LoginControl == 'Success' ) {

					Realm.open({ schema: [uyeSchema,notificationSchema], schemaVersion: 5 })
						.then(realm => {
							realm.objects('Uyeler'); //Tüm objeleri geri dönderir.
							//  alert(realm.objects('Uyeler').filtered('username="'+this.state.UserName+'"').length)

							if (
								realm
								.objects('Uyeler')
								.filtered('username="' + this.state.UserName + '"').length < 1
							) {
								//	 alert(JSON.stringify(realm.objects('Uyeler').filtered('username="'+this.state.UserName+'"')))
								Realm.open({ schema: [uyeSchema,notificationSchema], schemaVersion: 5 })
									.then(realm => {
										realm.write(() => {
											realm.create('Uyeler', {
												username: this.state.UserName,
												mail: this.state.UserName,
												sifre: encodeURIComponent(this.state.Password),
												rank: 2,
												token: response.access_token,
												sepet: 0,
											});
										});
									})
									.catch(error => {
										console.log(error);
									});
							} else {

							}
							// alert(JSON.stringify(realm.objects('Uyeler').filtered('username="gokhanamal"')) )    //Username'i gokhanamal olan objeleri geri dönderir.
						})
						.catch(error => {
							console.log(error);
						});





					this.setState({token:response.access_token,
						UserName: this.state.UserName,
						Password: encodeURIComponent(this.state.Password),

					},function(){

						this.setState({closelogin:false})
						this.props.navigation.navigate('Home',{UserName:this.state.UserName,Password: encodeURIComponent(this.state.Password),token: response.access_token})
						//	this.bringcategories()
						//	this.showshopcase()
						//	this.showslider()
						//	this.getparameters()
						setInterval(() => {

							//	this.showcart()

						}, 2000);



					})

					//	return
				} else {
					this.dropdown.alertWithType('error', 'Hata',response.Error_Description);

				}
				this.setState({ loading: false });
			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				alert(genelhata);
				this.setState({ loading: false });
			});






	}



	render() {
		const pageArray = [{
			title: 'Page 1',
			description: 'Description 1',
			img: 'https://goo.gl/Bnc3XP',
			imgStyle: {
				height: 80 * 2.5,
				width: 109 * 2.5,
			},
			backgroundColor: '#fa931d',
			fontColor: '#fff',
			level: 10,
		}, {
			title: 'Page 2',
			description: 'Description 2',
			img: 'https://goo.gl/Bnc3XP',
			imgStyle: {
				height: 93 * 2.5,
				width: 103 * 2.5,
			},
			backgroundColor: '#a4b602',
			fontColor: '#fff',
			level: 10,
		}];
		return (
			<View style={{flex:1}}>
			{Platform.OS=='ios'&&<AppIntro>
				<View style={[styles.slide,{ backgroundColor: '#333',flex:1,alignItems:'center',justifyContent:'center' }]}>
				{Platform.OS=='ios'&&
					<LottieView 	   style={{width:Dimensions.get('window').width/1.3}}     source={require('./world_locations.json')}
					autoPlay
					loop
					/>
				}
				<Text style={{color:'white',fontWeight:'800'}}>INTERLINK ŞİRKETLER GRUBU</Text>
				<Text style={{color:'white'}}>
				loyalty, müşteri sadakat programları, çalışan prim, ödül puan ve promosyon sistemlerinde sektör lideridir.</Text>
				</View>
				<View style={[styles.slide, { backgroundColor: '#444',flex:1,alignItems:'center',justifyContent:'center' }]}>
				{Platform.OS=='ios'&&

					<LottieView 	   style={{width:Dimensions.get('window').width/1.3}}     source={require('./world_locations.json')}
					autoPlay
					loop
					/>
				}
				<Text style={{color:'white',fontWeight:'800'}}>Sadakat Programları</Text>
				<Text style={{color:'white'}}>
				Sadakat Programlarımız; dijital hediye katalogları, baremli kampanyalar, öner - kazan kampanyaları ve daha birçok kampanya kurgusunu içeriyor. Bu programlarla firmalara marka bilinirliği, satış artışı ve sadık müşteri kitlesi sağlama konularında destek oluyoruz.</Text>


				</View>
				<View style={[styles.slide,{ backgroundColor: '#555',flex:1,alignItems:'center',justifyContent:'center' }]}>
				{Platform.OS=='ios'&&

					<LottieView 	   style={{width:Dimensions.get('window').width/1.3}}     source={require('./world_locations.json')}
					autoPlay
					loop
					/>
				}
				<Text style={{color:'white',fontWeight:'800'}}>Promosyon Uygulamaları</Text>
				<Text style={{color:'white'}}>
				Marka bilinirliği ve sadık müşteri kitlesi yaratmayı hedefleyen firmalara Interlink güvencesiyle promosyon hizmeti sunuyoruz. Interlink olarak tedarik, depolama, lojistik gibi firmaların hayatını kolaylaştıran süreçlerde etkin rol oynuyoruz.</Text>

				</View>
				<View style={[styles.slide, { backgroundColor: '#666',flex:1,alignItems:'center',justifyContent:'center' }]}>
				{Platform.OS=='ios'&&

					<LottieView 	   style={{width:Dimensions.get('window').width/1.3}}     source={require('./world_locations.json')}
					autoPlay
					loop
					/>
				}
				<Text style={{color:'white',fontWeight:'800'}}>Destek Hizmetleri</Text>
				<Text style={{color:'white'}}>
				Müşterilerimizin memnuniyeti ve iş süreçlerimizin kusursuz ilerlemesi için destek hizmetler sunuyoruz.</Text>


				</View>

				</AppIntro>
			}
			{Platform.OS=='android'&&	
			<Text style={{color:'black',position:'absolute',bottom:Dimensions.get('window').height/2,textAlign:'center',fontSize:16}} onPress={()=> 
				this.props.navigation.navigate('Home')}>Çıkış yaptınız, Tekrar giriş yapmak için dokunun</Text>
			}
			<DropdownAlert ref={ref => this.dropdown = ref} style={{height:250}} />

			</View>


		);
	}
}

class Sozlesme extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};
	componentDidMount(){

		this.doget()
	}
	doget(){


		fetch('https://www.firsatlarkulubu.com/oauth/api/content/get', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Bearer ' + this.props.navigation.state.params.token,

			},

			body: 
			'Key=Satış Sözleşmesi&OrderId=0'+this.state.username ,



		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				this.setState({ loading: false,errormessage:JSON.stringify(response.ResultMessage) });
				// alert(JSON.stringify(response))

			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(genelhata);
				this.setState({ loading: false });
			});



	}




	render(){
		return(
			<View style={{flex:1,backgroundColor:'black'


			}}>
			<HHeader baslik="Kullanıcı Sözleşmesi" title={this} arkaplan={renk}/>

			<View style={{justifyContent:'center',alignItems:'center'}}>
			<View style={{height:10,width:10}}/>
			<ScrollView>
			<View style={{justifyContent:'center',alignItems:'center'}}>


			{this.state.errormessage &&
				<Text style={{color:'white'}}>{this.state.errormessage}</Text>
			}


			</View>
			</ScrollView>


			</View>

			</View>



		)

	}
}


class KVKK extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	static navigationOptions = {
		title: 'Home',
		header:null
	};
	componentDidMount(){

		this.doget()
	}

	doget(){


		fetch('https://www.firsatlarkulubu.com/oauth/api/content/get', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded',

				Authorization: 'Bearer ' + this.props.navigation.state.params.token,
			},

			body: 
			'Key=KVKK&OrderId=0'+this.state.username ,




		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				this.setState({ loading: false,errormessage:JSON.stringify(response.ResultMessage) });
				// alert(JSON.stringify(response.ResultMessage))


			})
			.catch(error => {
				this.props.navigation.navigate('Home');
				// alert(genelhata);
				this.setState({ loading: false });
			});



	}

	render(){
		return(
			<View style={{flex:1	   

			}}>
			<HHeader baslik="KVKK Metni" title={this} arkaplan={renk}/>

			<View style={{justifyContent:'center',alignItems:'center'}}>
			<View style={{height:10,width:10}}/>
			<ScrollView>
			<View style={{justifyContent:'center',alignItems:'center'}}>
			{this.state.loading && <Text style={{color:'blue'}}>yükleniyor...</Text>}

			{this.state.errormessage &&
					<WebView source={{html: this.state.errormessage}} style={{height:Dimensions.get('window').height-80,width:Dimensions.get('window').width}}/>

			}


			</View>
			</ScrollView>

			</View>

			</View>



		)

	}
}

const StackNavigatorConfig = {
	headerMode:'none',
	transitionConfig : () => ({
		transitionSpec: {
			duration: 0,
			timing: Animated.timing,
			easing: Easing.step0,
		},
	}),
}
//const RootStack = StackNavigator(
	const RootStack2= createBottomTabNavigator(

		{
			Home: {
				screen: HomeScreen
			},
			
			Arama:
			{
				screen:SearchScreenx
			},
			Firsatlar:
			{
				screen:FirsatlarScreen
			},
			Sepet:
	{
		screen:SepetScreen
	},
	
		
	Diger:
	{
		screen:DigerScreen
	},
		
		
		
		
		
		
		
		
		
		
		
		
		
		}
		,
		{
		  defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
			  const { routeName } = navigation.state;
			  let iconName;
			  	if (routeName === 'Home') {
				iconName = `home`;
			  } else if (routeName === 'Settings') {
				iconName = `settings`;
			  }
	  
			  // You can return any component that you like here! We usually use an
			  // icon component from react-native-vector-icons
			  return <Icon2 name="home" size={21} color="#333" style={{marginBottom:1}} />
			  ;
			},
		  }),
		  tabBarOptions: {
			style: {borderTopColor:'#eee',
				backgroundColor: 'white',
			 },
			 			activeTintColor: 'purple',
			inactiveTintColor: 'gray',
		  },
		}
	
	)

const RootStack = StackNavigator({
	Intro:
	{
		screen:IntroScreen
	},

	Home: {
		screen: RootStack2
	},
	
	Arama:
	{
		screen:SearchScreenx
	},
	Firsatlar:
	{
		screen:FirsatlarScreen
	},
	Profil:
	{
		screen:ProfilScreen
	},
	Diger:
	{
		screen:DigerScreen
	},
	Sepet:
	{
		screen:SepetScreen
	},
	Kayit:
	{
		screen:KayitScreen
	},
	Sifre:
	{
		screen:SifreScreen
	},
	Odeme:
	{
		screen:OdemeScreen
	},
	Urun:
	{
		screen:UrunScreen
	},
	Odeme:
	{
		screen:OdemeScreen
	},
	SiparisBasarili:
	{
		screen:SiparisBasarili
	},
	Siparisler:
	{
		screen:Siparisler
	},
	SiparisDetay:
	{
		screen:SiparisDetay
	},
	SifreDegistir:
	{
		screen:SifreDegistir
	},
	Hesabim:
	{
		screen:Hesabim
	},
	Sozlesme:
	{
		screen:Sozlesme
	},
	KVKK:
	{
		screen:KVKK
	},

	AdresDegistir:
	{
		screen:EditAddressScreen
	},















},StackNavigatorConfig);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: renk,
		padding:20,justifyContent:'space-between',
		//borderRadius:20
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
