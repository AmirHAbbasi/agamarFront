// import React from 'react';
// import { StreamChat } from 'stream-chat';
// import { Chat, Channel, ChannelHeader, MessageInput, MessageInputSmall, VirtualizedMessageList, Window } from 'stream-chat-react';

// import 'stream-chat-react/dist/css/index.css';

// const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
// const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3RlZXAtcG9uZC0xIiwiZXhwIjoxNjQwNTUxMjczfQ.Ul0SXNFXQfREVDrQ0XlRwWb64aas7xU_zQDR6eKptXY';

// chatClient.connectUser(
//     {
//         id: 'steep-pond-1',
//         name: 'steep',
//         image: 'https://getstream.io/random_png/?id=steep-pond-1&name=steep',
//     },
//     userToken,
// );

// const channel = chatClient.channel('livestream', 'spacex', {
//     image: 'https://goo.gl/Zefkbx',
//     name: 'SpaceX launch discussion',
// });

// const ChatComponent = () => (
//     <Chat client={chatClient} theme='livestream light'>
//         <Channel channel={channel}>
//             <Window>
//                 <ChannelHeader live />
//                 <VirtualizedMessageList />
//                 <MessageInput Input={MessageInputSmall} focus />
//             </Window>
//         </Channel>
//     </Chat>
// );

// export default ChatComponent;
