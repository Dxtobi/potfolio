<script>

    //SERVICE
    let serviceName = "";
    let serviceDetails = "";
    let serviceImg = ""
    function newService() {
      
     
    }

  

    

    



  </script>

<div class="logo-font my-3 text-2xl capitalize">Services</div>
    <form on:submit|preventDefault={newService}>
  
     <div class="border-2 border-yellow-400  my-2 p-2">
        <label>
            Name:
            <input type="text" bind:value={serviceName} />
          </label>
     </div>
     <div class="border-2 border-yellow-400  my-2 p-2">
        <label>
            ImgUrl:
            <input type="text" bind:value={serviceImg} />
          </label>
     </div>

     <div class="border-2 border-yellow-400  my-2 p-2">
        <label>
            More details:
            <input type="text" bind:value={serviceDetails} />
          </label>
     </div>

      <button type="submit" class="bg-yellow-500">Add Service</button>
    </form>

<style>
     
      
        label {
          display: block;
          margin-bottom: 10px;
        }
      
        input {
          width: 100%;
          padding: 5px;
        }
      
        button {
          margin-top: 10px;
          padding: 8px 24px;
          width: 50%;
          color: white;
          border: none;
          cursor: pointer;
        }
      </style>

