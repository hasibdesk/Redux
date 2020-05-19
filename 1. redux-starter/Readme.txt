// Creating reducer ()reducer is pure functon which can call multiple time and always return same result. its free of sideeffer.  Pure function dont touch dom element , global state, not make api call. coz all oparation can change the state as whole


// Creating store

// after creating store, it need to use  and dispatch the action

in the dispatch, it need to pass the actions. Action should have two property (type and payload)

=> TYPE is the action type or name 
=> Payload is the data or action that sending

Subscribe() method , its listener it runs in every state change to see the every state change. UI component use subscribe to notify state changes

subscribe() method return a unsubscribe function so we can store it as variable and use that 

// Action Creator to use the same action in different places. 