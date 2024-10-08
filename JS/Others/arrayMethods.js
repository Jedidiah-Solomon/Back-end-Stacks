const fruits = ['Banana', 'Cowpea', 'Pineapple'];

        fruits.push('Anthil');//add to the end
        //fruits.pop()// removes from the end
        //fruits.unshift('Beans'); // adds to the beginning
        //fruits.shift();// removes from beginning


        console.log(fruits);
        console.log(typeof fruits); //object array
        console.log(fruits[0]);
        console.log(typeof fruits[0]); //string

        numOfFruits = fruits.length;
        console.log(numOfFruits);

        indexOfFruit = fruits.indexOf('Cowpea');
        console.log(`Index of this is : ${indexOfFruit}`);

           
        const indexOfFruitOff = fruits.indexOf('notFound');
        const container = document.querySelector('.container');

        if (indexOfFruitOff === -1) {
            const errorBox = document.createElement('p');
            errorBox.textContent = 'The Fruit is not found';
            container.appendChild(errorBox);
            console.log(indexOfFruitOff);
        } else {
            const errorBox = document.createElement('p');
            errorBox.textContent = 'The fruit is found';
            container.appendChild(errorBox);
            console.log('Fruit is here')
        }



        for (let i = 0; i < fruits.length; i++) {
            const element = fruits[i];
            console.log(element);    
        }

        //fruits.sort();
        //fruits.reverse();
        fruits.sort().reverse();

        for(let fruit of fruits){
            console.log(fruit);
        }


        // Spraed Operator uses three dots to unpack array or string

        const numbers = [1, 2, 3, 4, 5];
        //let maxno = Math.max(numbers);//Ans is NAN
        let maxno = Math.max(...numbers);//Ans is 5 BC WE UNPACKED IT
        console.log(numbers);
        console.log(maxno);//Ans is 5


        let userinfo = 'Jedy Solomon';

        let arrayjed = [userinfo];
        console.log(arrayjed);// it makes it one element in an array, length is one
        console.log(typeof arrayjed);//object array

        let letters = [...userinfo];
        console.log(letters); // ['J', 'e', 'd', 'y', ' ', 'S', 'o', 'l', 'o', 'm', 'o', 'n']
        console.log(typeof letters);//object array

        let letters2 = [...userinfo].join('-');// J-e-d-y- -S-o-l-o-m-o-n
        let letters3 = [...userinfo].join('');// Jedy Solomon

        console.log(letters2, letters3);
        console.log(typeof letters2, typeof letters3);//string

        let programs = ['web', 'internet', 'AI', 'marketing'];
        let category = ['beginner','intermediate','advanced'];

        let programCategory = [...programs, ...category];
        console.log(programCategory);//['web', 'internet', 'AI', 'marketing', 'beginner', 'intermediate', 'advanced']

        /* Rest parameter = (...rest) allow a function work with a
            variable number of arguments by bundling them into an
            array.

            spraed = expands an array into separate elements.
            rest = bundles separate elements into an array.
        */

        /*function openFridge(...foods) { //IT CAN ACCEPT ANY NO. OF ARGUMENTS USING THIS PARAMETER OF REST
            console.log(foods);
        }

        const food1 = 'pizza';
        const food2 = 'hamburger';
        const food3 = 'hotdog';
        const food4 = 'sushi';
        const food5 = 'ramen';

        openFridge(food1, food2, food3, food4, food5);*/
        


       /* function openFridge(foods) { //IT CAN ACCEPT ANY NO. OF ARGUMENTS USING THIS PARAMETER OF REST
            console.log(foods);
        }

        const food1 = 'pizza';
        const food2 = 'hamburger';
        const food3 = 'hotdog';
        const food4 = 'sushi';
        const food5 = 'ramen';

        openFridge(food1, food2, food3, food4, food5)// ANS IS PIZZA ONLY*/

        function openFridge(...foods) { // rest is used here
            console.log(...foods);//spread is used here
        }

        const food1 = 'sharwama';
        const food2 = 'hamburger';
        const food3 = 'hotdog';
        const food4 = 'sushi';
        const food5 = 'ramen';

        openFridge(food1, food2, food3, food4, food5);//ans is a string - sharwama hamburger hotdog sushi ramen


        // Use it to compute sum
        function sumMoney(...numbers){
            let result = 0;

            for(let number of numbers){
                result+= number;
            }
            return result;
        }

        const totalNaira = sumMoney(100,120,50,10);

        console.log(`Your balance total is #${totalNaira}`);




        
        function combineStrings(...strings) {
            return strings.join(' ');
        }

        const fullName = combineStrings('Mr.', 'Jedy', 'Onwubiko');

        console.log(fullName);
        */