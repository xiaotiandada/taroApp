import { Component } from 'react'
import Taro, { eventCenter } from '@tarojs/taro'
import { View, Text, EventProps } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick: EventProps['onClick'] = () => {
    Taro.navigateTo({ url: '/pages/user/index' })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle>来</AtButton>
        <AtButton type='secondary' circle onClick={this.handleClick}>Uesr</AtButton>
      </View>
    )
  }
}
