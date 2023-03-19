import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';


class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.filters = ["All", "Websites", "Flayers", "Business Cards"];
        this.projects = [
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
                category: "Business Cards"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
                category: "Websites"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
                category: "Business Cards"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
                category: "Websites"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
                category: "Websites"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
                category: "Websites"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
                category: "Flayers"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
                category: "Websites"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
                category: "Business Cards"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
                category: "Websites"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
                category: "Websites"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
                category: "Business Cards"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
                category: "Websites"
            },
            {
                img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
                category: "Flayers"
            }
        ];
        this.state = {selected : "All", projects : this.projects};
        this.onSelectFilter = (filter) => {
            this.setState((prevState) => {
                if (filter === prevState.selected) return prevState;
                return {
                    selected: filter,
                    projects:
                        filter !== 'All'
                            ? this.projects.filter((project) => project.category === filter)
                            : this.projects };
            })
        };
    }

    render() {
        return (
            <>
                <div className="filters">
                    <Toolbar filters={this.filters} selected={this.state.selected} onSelectFilter={this.onSelectFilter}/>
                </div>
                <div className="content">
                    <ProjectList projects={this.state.projects}/>
                </div>
            </>
        );
    }
}

export default Portfolio;
