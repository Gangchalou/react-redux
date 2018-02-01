import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    //声明属性
    static propTypes = {
        count:PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired,
    }

    increment = ()=>{
        const num = this.select.value*1 //转移为字符串
       this.props.increment(num)
    }
    decrement = ()=>{
        const num = this.select.value*1 //转移为字符串
        // const count = this.props.store.getState()- num
        // this.setState ({count})
        this.props.decrement(num)
    }
    incrementOdd = ()=>{
        const num = this.select.value*1 //转移为字符串
        const count = this.props.count
        if(count%2 ===1){
            // this.setState ({count:count+num})
            this.props.increment(num)
        }
    }
    incrementAsync = ()=>{
        const num = this.select.value*1 //转移为字符串
        setTimeout(()=>{
            // this.setState ({count:count+num})
            this.props.increment(num)
        },1000)

    }

    render() {
    const {count} = this.props //获取状态
    return (
      <div>
        <p>click {count} times</p>
        <div>
            <select ref={select =>this.select = select}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementOdd}>increment of odd</button>&nbsp;
            <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    )
  }
}

