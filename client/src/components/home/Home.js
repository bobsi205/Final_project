import React, { Component } from 'react'
import { connect } from 'react-redux'

export const Home = () => {
    return (
        <div>
            this is home 
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
