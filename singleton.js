function process(state){
    this.state = state;
}

const Singleton =  (function(){
    function ProcessManager(){
        this.numProcess = 0;
    }

    let pManager;

    function creatProcessManager(){
        pManager = new ProcessManager();
        return pManager;
    }

    return {
        getProcessManager:()=>{
            if(!pManager)
                pManager = creatProcessManager();
                return pManager;
            
        }
    }
})()

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();
console.log(processManager === processManager2);