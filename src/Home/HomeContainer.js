import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView ,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    ScrollView,
  } from 'react-native'
import { connect } from 'react-redux';
import HomeActions from '../redux/Actions/HomeActions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputField: {
    width: width - 120,
    height: 45,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  addButton: {
     backgroundColor: '#f37',
     width: 50,
     height: 45,
     color: '#fff',
     paddingHorizontal: 10,
     marginLeft: 10,
     textAlign: 'center',
  },
  todoElement: {
    color: '#333',
    paddingVertical: 10,
    paddingHorizontal: 15,
  }
})

class HomeContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      listOfTodos: [],
      typedTodo: '',
    }
  }

  goToDetails = () => {
      this.props.navigation.navigate('details')
  }


  onChangeOfText = (value) => {
    const { addTypedTodo } = this.props;
    addTypedTodo(value);
    this.setState({
      typedTodo: value
    })
  }

  addTodosToList = () => {
    // const{ typedTodo, listOfTodos } = this.state;
    // this.setState({
    //   listOfTodos: [...listOfTodos, typedTodo]
    // })
    const { currentTodo, addCurentTodoToList } = this.props;
    addCurentTodoToList(currentTodo);

  }

  renderAddField = () => {
    return (
      <View style={{flexDirection: 'row', marginTop: 10,alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
          style={styles.inputField}
          onChangeText={(value) => this.onChangeOfText(value)}
         />
        <TouchableOpacity onPress={this.addTodosToList}>
          <Text style={styles.addButton}>Add</Text>
        </TouchableOpacity>
      </View>
    )
  }

  onDelete = (todoToDelete) => {
    console.log('deleted todo', todoToDelete)
  }

  getAllTodoElements = () => {
    // const { listOfTodos } = this.state;
    const { listOfTodos } = this.props;
    return listOfTodos.map( eachTodo => {
      return (
        <TouchableOpacity onPress={() => this.onDelete(eachTodo)}>
          <Text style={styles.todoElement}>{eachTodo}</Text>
        </TouchableOpacity>
      )
    })
  }


  renderListOfTodos = () => {
     return (
        <ScrollView>
            {this.getAllTodoElements()}
        </ScrollView>
     )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
          {this.renderAddField()}
          {this.renderListOfTodos()}
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  // getting data form redux to screen
  const { home } = state;
  const { currentTodo, listOfTodos } = home;
  return {
    currentTodo, listOfTodos
  }
};

const mapDispatchToProps = dispatch => ({
  // from screen to redux communicate
  addTypedTodo: (eachTypedValue) => {
     dispatch(HomeActions.addTodo(eachTypedValue))
  },
  addCurentTodoToList: (currentTodo) => {
    dispatch(HomeActions.addToList(currentTodo))
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
