import React, { Component } from 'react';
import {
	Platform,ScrollView,Keyboard,PickerIOS,KeyboardAvoidingView,
	StyleSheet,StatusBar,
	Text,Easing,
	View,TextInput,Dimensions,FlatList,Button,TouchableOpacity,Image,WebView,Animated,ActivityIndicator
} from 'react-native';
import { iOSUIKit,material } from 'react-native-typography'
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
import LottieView from 'lottie-react-native';

//import { connect } from 'react-redux';

const renk = '#09347a'
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
			focused ? 	<Icon2 name="home" size={21} color="red" style={{marginBottom:1}} />
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
this.props.dispatch({type:'asd'})
alert(JSON.stringify(this.props))
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

				source={require('../bg.jpg')} style={{position:'absolute',top:0,left:0,zIndex:0,opacity:.08}}
				/>

				<KeyboardAvoidingView  behavior="padding" enabled style={styles.container}>
				<Image 
				resizeMode={Platform.OS=='ios'?"repeat":null}	    

				source={require('../bg.jpg')} style={{position:'absolute',top:0,left:0,zIndex:0,opacity:.08}}
				/>
				<View style={{height:10,width:10}}/>
				<View style={{alignItems:'center',justifyContent:'center',width:Dimensions.get('window').width,backgroundColor:'transparent'}}>
				{Platform.OS=='ios'&&

					<LottieView 	   style={{width:Dimensions.get('window').width/1.3}}     source={require('../world_locations.json')}
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
				</KeyboardAvoidingView>
			)
		}

	}
}
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
const mapstatetoprops=(state)=>({
    count:state.count


})
export default (HomeScreen)