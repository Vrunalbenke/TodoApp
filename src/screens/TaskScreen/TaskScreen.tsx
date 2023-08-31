import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import TaskView from '../../components/TaskView';
import Icon from 'react-native-vector-icons/Ionicons';
import {TaskScreenNavigationProp} from '../../navigation/type';
// const oldArray:any[] = []
let todo: {
  id: number;
  title: string;
  desc: string;
};
let allDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
let allMonths = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const TaskScreen = ({route, navigation}: TaskScreenNavigationProp) => {
  // const [TodoList,setTodoList] = useState<object[]>([{title:'Add Task',desc:'Manage your today\'s here by add them here',id:Math.random()*100}])

  // if (route.params !== undefined) {
  //   todo = {
  //     id: Math.random() * 100,
  //     title: route.params?.TaskTitle,
  //     desc: route.params?.TaskDesc,
  //   };
  //   // oldArray.push(todo)
  //   // setTodoList([...TodoList, todo]);
  //   // TodoList.push(todo)
  // }

  let time = new Date();
  let date = time.getDate();
  let day = time.getDay();
  let month = time.getMonth();

  function navToAddScreen(id: number) {
    navigation.navigate('AddScreen', {id: id});
  }
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderName}>Today's Task</Text>
        <Text style={styles.DateTime}>
          {allDays[day]},{date} {allMonths[month]}
        </Text>
      </View>
      <TaskView navToAddScreen={navToAddScreen} />
      <TouchableOpacity
        style={styles.AddTaskContainer}
        onPress={() => navigation.navigate('AddScreen')}>
        <Icon name="add-circle-outline" style={styles.AddTaskIcon} />
        {/* <Text style={styles.AddTaskText}>ADD TASK</Text> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TaskScreen;
