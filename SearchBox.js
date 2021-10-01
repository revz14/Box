import React, { Component } from 'react';
import styles from './SearchBox.module.css';
import Data from './data.json';
import Suggestions from './Suggestions';
import Table from './Table';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import AddMember from './AddMember';
import Box from '@mui/material/Box';

export default class SearchBox extends Component {
    constructor(props) 
    {
        super(props)
        this.state = {
            data: Data.data,
            keyword: "",
            results: [],
            showsugg: false,
            addpatients: false
        }
    }
    matchname = (name, keyword) => {
        let keylen = keyword.length
        keyword = keyword.toLowerCase()
        name = name.toLowerCase().substring(0, keylen)
        return name === keyword && keylen !== 0
    }
    onSearch = (v) => {
        let results = this.state.data.filter(
            item => this.matchname(item.name, v))
        this.setState({
            results: results
        })

    }
    updateField = (v) => {
        this.setState({
            keyword: v,
            showsugg: true,
        })
        this.onSearch(v)
    }
    updateText = (name, dob) => {
        let res = this.state.data.filter(item => item.name === name && item.dob === dob)
        this.setState({
            keyword: name,
            showsugg: false,
            results: res,
            showdetails: true
        })
    }

    clickHandler =()=>{
        this.setState({
            showdetails:true,
            addpatients: true
        })
    }
    render() {
        return (

            <Box>
                {
                    this.state.showdetails ? <Table results={this.state.results} /> :
                        <div className={styles.pap}>
                            <Paper
                                component="form"
                                sx={{ p: '1px 4px', display: 'flex', width: 580 }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    className={styles.searchBar}
                                    placeholder="Search Patient"
                                    onChange={(e) => this.updateField(e.target.value)}
                                    value={this.state.keyword}
                                />
                                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                            {
                                this.state.showsugg && this.state.results.length > 0 ?
                                    <div>
                                        <Suggestions results={this.state.results}
                                            update={this.updateText} />
                                    </div> :
                                    this.state.keyword.length > 0 && this.state.results.length === 0 ?
                                        <div className={styles.noResult}>
                                            <h4>No results found</h4>
                                        </div> : null
                            }
                        </div>
                }

                {this.state.addpatients ? <AddMember/>:
                <div className={styles.butn}>
                    <Button variant="contained" onClick={this.clickHandler}>Add</Button>
                    <Button>Cancel</Button>
                </div>
                }

            </Box>

        );
    }
}