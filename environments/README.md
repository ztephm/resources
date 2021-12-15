# Python venv
*Create a virtual environment with Python 3 + Jupyter notebook + requests lib*

## Resources
* https://docs.python.org/3/library/venv.html
* https://ipython.readthedocs.io/en/stable/install/kernel_install.html
* https://docs.python-requests.org/en/latest/
* https://jupyter.org/install

## Instructions
*This is tested on Mac, some Windows instructions can be found [here](https://docs.python.org/3/library/venv.html)*

### Create the Environment
1. `cd` into the project directory where you want to create the python environment
    * My test = `mkdir python3-requests && cd python3-requests`
2. macOS has both Python 2 & 3 installed, check versions:
    `python --version && which python`
      * Checks Python 2 version & path (OS usually uses Python 2)
    `python3 --version && which python` 
      * This is what we can use to create our virtual environment
3. `python3 -m venv py3ReqEnv`
    * This creates a folder named **py3ReqEnv** that contains your environment
    * **python3** = specify that Python 3 should be used in the environment
    * **-m** = module name
    * **venv** = [venv](https://docs.python.org/3/library/venv.html) is a Python module used for creating virtual environments
    * **py3ReqEnv** = path to where you want the environment to live + whatever custom name you want to give your environment. Since we are already in the environment directory we want we can just specify name. Often people just name it env.
4. `source py3ReqEnv/bin/activate`
    * starts the environment
    * Terminal prompt should show (py3ReqEnv)
5. `pip install ipykernel`
6. `ipython kernel install --user --name=py3ReqEnv`
    * Steps 5 & 6 install a kernel & name it 
    * This can be helpful if you use Jupyter notebook & want to create a script using Jupyter's NEW pulldown menu - you will see this py3ReqEnv name to choose from
7. `pip install jupyterlab`
    * Installs [Jupyter](https://jupyter.org/index.html) - this will let you run a Python notebook out of this environment for script writing/debugging
    * You might need to upgrade your pip version first according to terminal output instructions
8. `pip install requests`
    * This is an example of how you can customize this particular python 3 environment by adding whatever Python modules your project needs
    * [Requests](https://docs.python-requests.org/en/latest/) is a Python library for submitting HTTP requests
9. `pip freeze > requirements.txt`
    * **pip freeze** = To make easier to see in the future which libraries this particular environment includes you can generate a **requirements.txt** file that lists them
    * **> py3ReqEnv/requirements.txt** = Writes the pip freeze output to a text file named requirements, in our python3-requests folder. 
      * You can place the file wherever you want. Best practice is to put it in the root directory of your project folder.
10. `deactivate`
    * Shuts down the environment

### Use the Environment
1. `cd` into the parent directory of the `py3ReqEnv` folder you created above
    * My test = `cd python3-requests`
2. `source py3ReqEnv/bin/activate`
    * Start the environment
3. `jupyter notebook`
    * This will auto-open the Jupyter Notebook UI in your laptop's default browser
4. Click the Jupyter Notebook *New* button and select *py3ReqEnv* from the *Notebook* submenu.
    * This will open a new Python notebook
    * This notebook gets saved as a .ipynb file in your project folder, outside of the py3ReqEnv directory
5. When you're finished coding in the notebook, in Terminal:
    * Ctrl + C twice to shut down the notebook server
    * `deactivate`

*When you restart the environment the previous notebooks you created will still be available.*
*Jupyter notebook can also handle .py files.*