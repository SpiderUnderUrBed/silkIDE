#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// use tauri::Manager;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
    println!("Received greet request for: {}", name);
    println!("Redirecting!");

    format!("Hello, {}!", name)
}
    // tauri::Builder::default()
    // .invoke_handler(tauri::generate_handler![greet])
    // .setup(|app| {
    //     #[cfg(debug_assertions)] // only include this code on debug builds
    //     {
    //         // let window = app.get_window("main").unwrap(); // Use the get_window method from the Manager trait
    //         // window.open_devtools();
    //         // window.close_devtools();
    //     }
    //     Ok(())
    // })
    // .run(tauri::generate_context!())
    // .expect("error while running tauri application");
// navigateToIDE
// #[tauri::command]
// fn navigate_to_ide()  {
//     println!("hello")
// }