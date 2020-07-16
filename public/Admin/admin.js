var student = (function() {
   
    const initializeForm = function() {

        $('#addstudentForm').on('submit', addStudent);

        function addStudent(event) {
            event.preventDefault();

            let data = {}
            $(this).serializeArray().map(function(field){data[field.name]=field.value});
            firebase.database().ref('students/').push(data, function(error) {
                if (error) {
                    alert("Data could not be saved." + error);
                } else {
                    window.location.href ="/public/admin/student-list.html";
                }
            });
        }
        
    }

    const initializeList = function () {
    firebase.database().ref('students/').on('value', function(snapshot) {

        let content = '';
        snapshot.forEach(function(item) {
            const student = item.val()

            content += `<tr>`;
            content += `<td>${student.name}</td>`;
            content += `<td>${student.birthdate}</td>`;
            content += `<td>${student.tel}</td>`;
            content += `<td>${student.email}</td>`;
            content += `<td>${student.study}</td>`;
            content += `<td>${student.sex ? "homme":"femme"}</td>`;
            content += `<td><button class="btn btn-danger btn-delete" data-id="${item.key}">supprimer</button>`;
            content += `</tr>`;
            
            $('#student-table > tbody').empty().append(content)
        });

        $('.btn-delete').on('click', deleteStudent);
        
        function deleteStudent(event) {
            const id = $(this).data("id");
            const student = firebase.database().ref('students/' + id);
            student.remove();
            window.location.reload();
        }
        
    });
    }

    return {
        initializeForm: initializeForm,
        initializeList: initializeList
    };

 })();


 var prof = (function() {
   
    const initializeForm = function() {

        $('#addProfForm').on('submit', addProf);

        function addProf(event) {
            event.preventDefault();

            let data = {}
            $(this).serializeArray().map(function(field){data[field.name]=field.value});
            firebase.database().ref('profs/').push(data, function(error) {
                if (error) {
                    alert("Data could not be saved." + error);
                } else {
                    window.location.href ="/public/admin/prof-list.html";
                }
            });
        }
    }

    const initializeList = function () {
        firebase.database().ref('profs/').on('value', function(snapshot) {

            let content = '';
            snapshot.forEach(function(item) {
                const prof = item.val()

                content += `<tr>`;
                content += `<td>${prof.name}</td>`;
                content += `<td>${prof.birthdate}</td>`;
                content += `<td>${prof.tel}</td>`;
                content += `<td>${prof.email}</td>`;
                content += `<td>${prof.sex ? "homme":"femme"}</td>`;
                content += `<td><button class="btn btn-danger btn-delete" data-id="${item.key}">supprimer</button>`;
                content += `</tr>`;
                
                $('#profs-table > tbody').empty().append(content)
            });

            $('.btn-delete').on('click', deleteProf);
            
            function deleteProf(event) {
                const id = $(this).data("id");
                const student = firebase.database().ref('profs/' + id);
                student.remove();
                window.location.reload();
            }
            
        });
    }

    return {
        initializeForm: initializeForm,
        initializeList: initializeList
    };

 })();

 var user = (function() {
   
    const initializeForm = function() {

        $('#addUserForm').on('submit', addUser);

        function addUser(event) {
            event.preventDefault();

            let data = {}
            $(this).serializeArray().map(function(field){data[field.name]=field.value});
            firebase.database().ref('users/').push(data, function(error) {
                if (error) {
                    alert("Data could not be saved." + error);
                } else {
                    firebase.auth().createUserWithEmailAndPassword($('#email').val(), $('#password').val()).catch(function(error) {
                        console.log(error);
                        alert("Data could not be saved." + error.message);
                      });
                  //  window.location.href ="/public/admin/users.html";
                }
            });
        }
        
    }

    const initializeList = function () {
    firebase.database().ref('users/').on('value', function(snapshot) {

        let content = '';
        snapshot.forEach(function(item) {
            const user = item.val()

            content += `<tr>`;
            content += `<td>${user.name}</td>`;
            content += `<td>${user.email}</td>`;
            content += `<td>${user.type}</td>`;
            content += `<td><button class="btn btn-danger btn-delete" data-id="${item.key}">supprimer</button>`;
            content += `</tr>`;
            
            $('#user-table > tbody').empty().append(content)
        });

        $('.btn-delete').on('click', deleteUser);
        
        function deleteUser(event) {
            const id = $(this).data("id");
            const user = firebase.database().ref('users/' + id);
            user.remove();
            window.location.reload();
        }
        
    });
    }

    return {
        initializeForm: initializeForm,
        initializeList: initializeList
    };

 })();
