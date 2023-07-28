<template>
    <div class="noteto-sidebar noteto-sidebar-default">
        <!-- Logo wrapper -->
        <div class="noteto-sidebar-logo flex items-center justify-between">
            <router-link to="/note-plus/vue/dist/" aria-current="page" class="header-logo">
                <img src="/note-plus/vue/dist/img/logo.ed1954c8.png" alt="logo" class="img-fluid rounded-normal">
                <h4 class="logo-title ml-3">Noteto</h4>
            </router-link>
            <div class="noteto-menu-bt-sidebar">
                <i class="las la-times wrapper-menu"></i>
            </div>

        </div>

        <!-- Profile wrapper -->
        <div class="noteto-sidebar-profile">
            <div class="flex justify-between items-center">
                Amin
            </div>
        </div>

        <!-- sidebar menu wrapper -->
        <div class="noteto-sidebar-content">
            <nav class="noteto-sidebar-menu">
                <ul class="noteto-sidebar-menu-content">
                    <li>
                        <router-link to="/">Your Notes</router-link>
                    </li>
                    <li>
                        <router-link to="/">Your Notes</router-link>
                    </li>
                    <li>
                        <router-link to="/">Your Notes</router-link>
                    </li>
                    <li>
                        <router-link to="/">Your Notes</router-link>
                    </li>
                    <li>
                        <router-link to="/">Your Notes</router-link>
                    </li>
                    <li>
                        <router-link to="/">Your Notes</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>