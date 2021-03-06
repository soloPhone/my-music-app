import React from 'react'
import { ListComtainer, List, ListItem } from './style'
import { getCount } from '../../api/utils'
import { Props } from '../../types'
function RecommendList(props: Props) {
  const { recommendList } = props
  return (
    <ListComtainer>
      <h3>推荐歌单</h3>
      <List>
        {recommendList.map((item: any, index: number) => {
          return (
            <ListItem key={item.id + index}>
              <div className="img-wrapper">
                <div className="decorate"></div>
                <img src={item.picUrl + '?param=300*300'} width="100%" height="100%" alt="music" />
                <div className="play-count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <p className="desc">{item.name}</p>
            </ListItem>
          )
        })}
      </List>
    </ListComtainer>
  )
}

export default RecommendList
