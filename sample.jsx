if (isFormComplete) {
      try {
        const response = await fetch('http://172.20.10.2:8000/api/signup/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          // Reînnoiește starea formularului după trimiterea reușită a datelor
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            gender: '',
            cnp: '',
            address: ''
          });

          alert('Sign up successful!');
          navigate('/homePage');

        } else {
          alert('Sign up failed!');
        }
      } catch (error) {
        console.error('Error signing up:', error);
        alert('An error occurred while signing up.');
      }
    }
    else {
      alert("Please fill in all fileds!");
    }