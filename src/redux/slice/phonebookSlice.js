import { createSlice, nanoid } from "@reduxjs/toolkit";
import { dataContacts } from "../../data/data";

const contactsReducer = createSlice({
    name: "contacts",
    initialState: dataContacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(name, number) {
            return {
                payload: {
                    id: nanoid(),
                    name,
                    number,
                },
            }
            },
        },
        deleteContact(state, action) {
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            if (index !== -1) {
                state.contacts.splice(index, 1);
            }
        },
        updateFilter(state, action) {
            state.filter = action.payload;
        },
    }
})

export const { addContact, deleteContact, updateFilter } = contactsReducer.actions;
export const phonebookReducer = contactsReducer.reducer;