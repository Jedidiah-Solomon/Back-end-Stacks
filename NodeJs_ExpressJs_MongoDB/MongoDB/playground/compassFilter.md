1. Add this data to a db and colletion e.g nigeria_election > voters_agents

    ```
    [
    {
       "name": "Andrea Le",
       "email": "andrea_le@fake-mail.com",
       "school": {
          "name": "Northwestern"
       },
       "version": 5,
       "scores": [ 85, 95, 75 ],
       "dateCreated": { "$date": "2003-03-26" }
    },
    {
       "email": "no_name@fake-mail.com",
       "version": 4,
       "scores": [ 90, 90, 70 ],
       "dateCreated": { "$date": "2001-04-15" }
    },
    {
       "name": "Greg Powell",
       "email": "greg_powell@fake-mail.com",
       "version": 1,
       "scores": [ 65, 75, 80 ],
       "dateCreated": { "$date": "1999-02-10" }
    }
    ]
    ```

2. ```
   In Compass, use the left navigation panel to select the database and the collection you want to import the data to., Click the Documents tab., Click Add Data and select Insert Document., Set the View to JSON ({})., Paste the JSON documents from your clipboard into the modal., Click Insert.
   ```
3. Match by a Single Condition
   The following query filter finds all documents where the value of name is "Andrea Le":

`{ name: "Andrea Le" }`

4. Match by Multiple Conditions ($and)
   The following query filter finds all documents where scores array contains the value 75, and the name is Greg Powell:

`{ $and: [ { scores: 75, name: "Greg Powell" } ] }`
