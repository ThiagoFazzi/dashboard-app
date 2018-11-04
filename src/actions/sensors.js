import axios from 'axios'
export const CHANGE_VALUE = 'CHANGE_POSITION'

//const baseUrl = 'http://localhost:8080'

 const getValue = sensor => ({
  type: CHANGE_VALUE,
  payload: sensor
})


export const getSensorValue = () => (dispatch, getState) => {
    //axios.get(`${baseUrl}/sensor`)
    axios.get('http://localhost:8080/sensor')
    //.then(response => console.log(response.data))
    .then(response => {
        dispatch(getValue(response.data))
    })
    .catch(error => console.log(error))
}


/*
export const moveUp = (screenX, screenY) => (dispatch, getState) => {
    const position = getState()
    if(position.players.player.y > 100){
        const playerX = position.players.player.x
        const playerY = position.players.player.y - 50
        dispatch(move(playerX, playerY, screenX, screenY))
    }
}

export const moveRight = (screenX, screenY) => (dispatch, getState) => {
    const position = getState()
    console.log(screenX)
    if(position.players.player.x < (screenX-50)){
        const playerX = position.players.player.x + 50
        const playerY = position.players.player.y
        dispatch(move(playerX, playerY, screenX, screenY))
    }
}

export const moveDown = (screenX, screenY) => (dispatch, getState) => {
    const position = getState()
    if(position.players.player.y < 500){
        const playerX = position.players.player.x
        const playerY = position.players.player.y + 50
        dispatch(move(playerX, playerY, screenX, screenY))
    }
}

export const jumpFront = (screenX, screenY) => (dispatch, getState) => {
    const position = getState()
    if(position.players.player.x < (screenX-50) && position.players.player.y <= 500){
        const playerX = position.players.player.x
        const playerY = position.players.player.y
        Promise.resolve(_ => {
            setTimeout(
                dispatch(move(playerX + 50, playerY -100, screenX, screenY))
            ,2000)
            })
            //.then(setTimeout(_ => 
            //    dispatch(move(playerX + 50, playerY, screenX, screenY))
            //,2000))
        
        //.then(console.log('finished'))
    }
}
*/