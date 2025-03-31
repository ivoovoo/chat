import {useEffect} from "react";
import {useSelector} from "react-redux";

const heights = {}

export const useScrollBehavior = (chatRef, messagesRef) => {
    const {generate, activeName, messages} = useSelector((s) => s.chat);

    useEffect(() => {
        messagesRef.current.style.height = heights[activeName] || '0px';
        chatRef.current.scrollTo({
            top: chatRef.current.scrollHeight
        })
    }, [activeName]);

    useEffect(() => {
        const messagesTag = messagesRef.current;
        if (messagesTag && generate) {
            const chatHeight = chatRef.current.offsetHeight
            const messagesChildren = [...messagesTag.children]
            const messagesSize = messagesChildren.reduce((a, b) => a + b.offsetHeight, 0) + (messagesChildren.length * 8)
            const lastBox = messagesChildren[messagesChildren.length - 1];
            let height

            if (lastBox.offsetHeight < chatHeight && messagesChildren.length > 1) {
                height = messagesSize + chatHeight - lastBox.offsetHeight + "px";
                messagesTag.style.height = height;
            } else if (lastBox.offsetHeight > chatHeight) {
                height = messagesSize + chatHeight - 200 + 'px'
                messagesTag.style.height = height;
            }

            heights[activeName] = height


            chatRef.current.scrollTo({
                top: messagesRef.current.scrollHeight,
                behavior: "smooth",
            });

        }


    }, [messages]);
}