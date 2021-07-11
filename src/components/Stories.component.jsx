import React from 'react';
import Story from './Story.component';
import Header from './Header.component';

class Stories extends React.Component {
    intervalID;
    constructor(props){
        super(props);
        this.state = {
            stories : [],
            searchText:'',
            filterType : ['top','ask','show','job'],
            selectedType: this.props.match.path.length > 1 ? this.props.match.path.replace("/", "").trim() : 'top'
        }
    }
    getStories = async() => {
        console.log("api call starts");
        const url = `https://hacker-news.firebaseio.com/v0/${this.state.selectedType}stories.json`;
        const storyIds = await fetch(url).then(response => response.json());
        storyIds//.slice(0, 50)
        .map(async story => {
            const storyDetailurl = `https://hacker-news.firebaseio.com/v0/item/${story}.json`
            const storyDetails = await fetch(storyDetailurl).then(response => response.json());
            this.setState((state) => {
                return { stories: [...state.stories,storyDetails] };
            });
        });
    }


    componentDidMount(){
        this.getStories();
        this.intervalID = setInterval(()=>{
            this.setState({stories:[],searchText:''},() => {
                this.getStories();
            });
        }, 60000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    filterStories = (story) => {
        const inputText = this.state.searchText;
        return inputText ? 
        story.title.toLowerCase().includes(inputText.toLowerCase()) || story.by.toLowerCase().includes(inputText.toLowerCase()) 
        : 
        true;
    }

    onTypeChanged = (e) => {
        if(this.state.selectedType !== e.currentTarget.value){
            this.setState({selectedType:e.currentTarget.value,stories:[],searchText:''},() => {
                this.getStories();
            });
        }
    }

    render(){
        return (
            <div>
                <Header types ={this.state.filterType} selectedType={this.state.selectedType} onTypeChanged = {this.onTypeChanged} handleOnChange={(e) => {this.setState({searchText:e.target.value})}} />
                {
                    this.state.stories.filter(item => this.filterStories(item)).map((story,index) => {
                        return <Story key={story.id} sino={index+1} {...story} />
                    })
                }
            </div>
        )
    }
}

export default Stories;