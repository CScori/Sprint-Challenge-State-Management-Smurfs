1. What problem does the context API help solve?
state management and prop drilling
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions wait for an event before running a function to change the  state
reducers take pure functions and run them through to updste state
store is a state management that allows you to pass the data to individual components 
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
app state holds everything in the app and passses down
comp state gives individual comp access to the data it needs
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
thunk allows us to use a reducer async that way other actions can be carried out while data is fetched
1. What is your favorite state management system you've learned and this sprint? Please explain why!
context because it seems a bit more straight forwardless passing
