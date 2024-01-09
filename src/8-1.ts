
type Message = {
    id: number,
    type: MessageType,
    msg: string
}

enum MessageType { 
    Image,
    Audio
}

// 函数重载
const message = [
    {
        id: 1,
        type: MessageType.Image,
        msg: '111'
    },
    {
        id: 2,
        type: MessageType.Audio,
        msg: '222'
    },
    {
        id: 3,
        type: MessageType.Image,
        msg: '333'
    }
]


function searchMsg(condition: MessageType | number): Message | undefined | Message[] {
    if(typeof condition === 'number') {
        return message.find(item => item.id === condition)
    } else {
        return message.filter(item => item.type === condition)
    }
}
export {}