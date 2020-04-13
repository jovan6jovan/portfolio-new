export async function fetchProjects(setStateFunction) {
  const res = await fetch("./projects.json");
  res
    .json()
    .then((res) => setStateFunction(res))
    .catch((err) => console.log(err));
}
