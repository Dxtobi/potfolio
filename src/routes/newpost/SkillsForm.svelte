<script>


	
   
    //SKILL
    let skillIcon = "";
    let skillsName = "";

    function newSkills() {
      
      
    }

  





  </script>

<div class="logo-font my-3 text-2xl capitalize">Skill</div>
    <form on:submit|preventDefault={newSkills}>
      <div class="border-2 border-blue-400  my-2 p-2">
        <label class=" ">
            Name:
            <input type="text" bind:value={skillsName} class="" />
          </label>
      </div>
  
     <div class="border-2 border-blue-400  my-2 p-2">
        <label>
            ICON:
            <input type="text" bind:value={skillIcon} />
          </label>
     </div>

      <button type="submit" class="bg-blue-500">Post</button>
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

